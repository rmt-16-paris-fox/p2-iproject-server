const { QueryTypes } = require("sequelize");
const { User, MyRecipe, RateRecipe, sequelize } = require("./models");
// const sequelize = require("sequelize");

const result = sequelize.query(`select avg(rate), "RecipeId" from "RateRecipes" rr group by "RecipeId" `, { raw: true, type: QueryTypes.SELECT }).then((result) => {
  console.log(result);
});
