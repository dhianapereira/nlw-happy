const orphanages = require("./database/fakedata.js");

module.exports = {
  index(require, response) {
    return response.render("index");
  },

  locationOrphanages(require, response) {
    return response.render("location_orphanages", {orphanages});
  },

  pageOrphanage(require, response) {
    return response.render("page_orphanage");
  },

  registerOrphanage(require, response) {
    return response.render("register_orphanage");
  },
};
