import settings from './settings';
import { CountUp } from 'countup.js';
import { isHomeFromAppOrigin } from './utils/origin.js';

const lang = window.i18next.language;

console.log('Current lang:', lang);

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
  //console.log(`Start val ${options.startVal} to ${val}`);
  const countUp = new CountUp(id, val, options);
  if (!countUp.error) {
    countUp.start(() => { $(`#${id}`).addClass('loaded_stats'); if (typeof onEnd !== 'undefined') onEnd(); });
  } else {
    console.error(countUp.error);
  }
};

var loadStats = () => {
  $.getJSON('https://biodiversitydata.se/assets/counts.json', data => {
    setCounter('stats_occurrences', data.occurrence_records.count);
    setCounter('stats_datasets', data.datasets.count);
    setCounter('stats_institutions', data.institutions.count);
    setCounter('stats_species', data.species.count);
  });
};

document.addEventListener('DOMContentLoaded', () => {

  if (isHomeFromAppOrigin(settings.mainLAUrl)) {
    loadStats();
  }

});
