const Database = require("./database/db");
const saveOrphanage = require("./database/save_orphanage");

module.exports = {
  index(require, response) {
    return response.render("index");
  },

  async locationOrphanages(require, response) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return response.render("location_orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return response.send("Erro no banco de dados");
    }
  },

  async pageOrphanage(require, response) {
    const id = require.query.id;
    try {
      const db = await Database;
      const result = await db.all(`SELECT * FROM orphanages WHERE id="${id}"`);

      const orphanage = result[0];
      orphanage.images = orphanage.images.split(",");

      orphanage.firstImage = orphanage.images[0];

      orphanage.open_on_weekends == "0"
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);

      return response.render("page_orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return response.send("Erro no banco de dados");
    }
  },

  registerOrphanage(require, response) {
    return response.render("register_orphanage");
  },
};
