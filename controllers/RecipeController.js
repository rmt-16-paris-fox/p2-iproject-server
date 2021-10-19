const axios = require("axios");

class RecipeController {
  static async getAllRecipes(req, res, next) {
    try {
      const app_id = process.env.EDAMAM_APP_ID;
      const app_key = process.env.EDAMAM_APP_KEY;
      const { name } = req.body;

      if (!name) {
        throw { name: "nameEmpty" };
      }

      const result = await axios({
        url: "https://api.edamam.com/api/recipes/v2",
        params: {
          app_id,
          app_key,
          type: "public",
          q: name,
        },
      });

      res.status(200).json(result.data);
    } catch (err) {
      console.log(err);
      if (err.name === "nameEmpty") {
        res.status(400).json({ message: "Recipe name is required" });
      }
    }
  }
}

module.exports = RecipeController;
