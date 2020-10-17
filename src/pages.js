module.exports = {
  index(require, response) {
    const city = require.query.city;
    return response.render("index");
  },

  locationOrphanages(require, response) {
    return response.render("location_orphanages");
  },

  pageOrphanage(require, response) {
    return response.render("page_orphanage");
  },

  registerOrphanage(require, response) {
    return response.render("register_orphanage");
  },
};
