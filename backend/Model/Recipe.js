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
  recipe:{
    type:String,
    required:true
  },

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
