const mongoose = require("mongoose");
const recipe = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  foodtype: {
    type: String,
    required: true,
  },
  recipe: [
    {
      recipeList: {
        type: String,
      },
    },
  ],

  video: {
    type: String,
    required: true,
  },
  serving: {
    type: Number,
    required: true,
  },
  ingredient: [
    {
      ingredientName: {
        type: String,
      },
    },
  ],
});

const Recipe = mongoose.model("recipe", recipe);
module.exports = Recipe;
