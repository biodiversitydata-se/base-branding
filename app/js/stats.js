import settings from './settings';
import { CountUp } from 'countup.js';
import { isHomeFromAppOrigin } from './utils/origin.js';

const lang = window.i18next.language;

console.log('Current lang:', lang);

var collectory = settings.services.collectory.url;
var biocacheService = settings.services.biocacheService.url;


var setCounter = (id, val, onEnd) => {
  const options = {
    separator: lang === 'en' ? ',': '.',
    duration: 1
  };
  // If testing set some dummy value
  if (val === 0 && settings.isDevel) {
    val = 123456;
  }
  options.startVal = Math.round(val - val * 4/100); // we increment only a %
  console.log(`Start val ${options.startVal} to ${val}`);
  const countUp = new CountUp(id, val, options);
  if (!countUp.error) {
    countUp.start(() => { $(`#${id}`).addClass('loaded_stats'); if (typeof onEnd !== 'undefined') onEnd(); });
  } else {
    console.error(countUp.error);
  }
};

var getStats = (url, callback) => {
  // As many times during development, the LA portal is not returning stats, let's mock this a bit
  if (settings.isDevel) {
    if (url.indexOf('species') > -1) callback([{ count: 10402 }]);
    else callback({ totalRecords: 86965283, total: 12922 });
  } else {
    // Real call in production
    $.getJSON(url, callback);
  }
};

// If you want to show collections stats:
// `${collectory}/ws/dataResource/count`
var loadStats = () => {
  getStats(`${biocacheService}/occurrences/search`, (data) => {
    setCounter('stats_occurrences', data.totalRecords, () =>
      getStats(`${collectory}/ws/dataResource/count`, (data) => {
        setCounter('stats_datasets', data.total, () =>
          getStats(`${collectory}/ws/institution/count`, (data) => {
            setCounter('stats_institutions', data.total);
          })
        );
      })
    );});
  // Right now this is slow so we put here
  getStats(`${biocacheService}/occurrence/facets?q=*:*&facets=species&pageSize=0`, (data) => {
    setCounter('stats_species', data[0].count);
  });
};

document.addEventListener('DOMContentLoaded', () => {

  if (isHomeFromAppOrigin(settings.mainLAUrl)) {
    loadStats();
  }

});
