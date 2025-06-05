export default {
  isDevel: true,
  inMante: false, // set to true and deploy if you want to set a maintenance message in all the services
  enabledLangs: ["en"],
  mainDomain: "static.biodiversitydata.se", // used for cookies (without http/https)
  mainLAUrl: "https://static.biodiversitydata.se",
  baseFooterUrl: "https://static.biodiversitydata.se",
  theme: "sbdi", // for now 'material', 'sbdi' 'clean', 'superhero', 'yeti', 'cosmo', 'darkly', 'paper', 'sandstone', 'simplex', 'slate' or 'flatly' themes are available. See the last ones in: https://bootswatch.com/3/
  services: {
    collectory: { url: "https://collections.biodiversitydata.se", title: "Collections" },
    biocache: { url: "https://records.biodiversitydata.se", title: "Occurrence records" },
    biocacheService: {
      url: "https://records.biodiversitydata.se/ws",
      title: "Occurrence records webservice",
    },
    bie: { url: "https://species.biodiversitydata.se", title: "Species" },  
    bieService: {
      url: "https://species.biodiversitydata.se/ws",
      title: "Species webservice",
    },
    regions: { url: "https://regions.biodiversitydata.se", title: "Regions" },
    lists: { url: "https://lists.biodiversitydata.se", title: "Species List" },
    spatial: { url: "https://spatial.biodiversitydata.se", title: "Spatial Portal" },
    images: { url: "https://images.biodiversitydata.se", title: "Images Service" },
    cas: { url: "https://auth.biodiversitydata.se", title: "CAS" },
  },
  otherLinks: [
    { title: "Datasets", url: "https://collections.biodiversitydata.se/datasets" },
    {
      title: "Explore your area",
      url: "http://records.biodiversitydata.se/explore/your-area/",
    },
    { title: "Datasets", url: "https://collections.biodiversitydata.se/datasets" },
    { title: "twitter", url: "", icon: "twitter" },
  ],
  analytics: {
    googleId: 'UA-XXXXXXXX-1'
  }
};

