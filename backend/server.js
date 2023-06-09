const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv");
const Category = require("./Model/Category");
const Recipe = require("./Model/Recipe");

//environment variable or you can say constants
env.config();
const port = process.env.PORT;

/*s a middleware function in the Express framework that enables Cross-Origin Resource Sharing (CORS) for all routes in the server.*/
app.use(cors());

app.use(express.json());
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("> Server is up and running on port : " + port)
    );
  })
  .catch((err) => {
    console.log(err);
  });

//getting all the category data from category api
app.get("/category", async (req, res) => {
  const category = await Category.find(req.query);
  res.send(category);
});



//getting category data based on id from category api
app.get("/category/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category!, Sorry :(" });
  }

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ error: "No such category, Sorry :(" });
  }

  res.status(200).json(category);
});

//adding data in category api
app.post("/category", (req, res) => {
  const { country, countryImage, CategoryImage, subCategory } = req.body;
  const category = new Category();

  category.country = country;
  category.countryImage = countryImage;
  category.CategoryImage = CategoryImage;
  category.subCategory = subCategory;

  category
    .save()
    .then((result) => {
      console.log("Saved category successfully :", result);
    })
    .catch((error) => {
      console.error("Error saving:", error);
    });

  res.send({ message: "done successfully" });
});

// getting all the data from recipe api
app.get("/recipe", async (req, res) => {
  const {food} = req.query
  if(food){
    const foods = await Recipe.aggregate([{
      $match:{
        name:{$regex: new RegExp(`^${food}`,"i")},
      },
    }])
    res.send(foods);
    // console.log(foods);
  }
    

  
});

app.get( "/recipe",async(req,res)=>{
  const recipe = await Recipe.find(req.query);
  res.send(recipe)
})



//geting data based on id from recipe api
app.get("/recipe/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe!, Sorry!" });
  }

  const data = await Recipe.findById(id);

  if (!data) {
    return res.status(404).json({ error: "No such recipe!, Sorry!" });
  }

  res.status(200).json(data);
});

//adding data in recipe api
app.post("/recipe", (req, res) => {
  const { name, image, country, foodtype, recipe, video, serving, ingredient } =
    req.body;
  const recipes = new Recipe();

  recipes.name = name;
  recipes.image = image;
  recipes.country = country;
  recipes.foodtype = foodtype;
  // recipes.foodtypeImage=foodtypeImage;
  recipes.recipe = recipe;
  recipes.video = video;
  recipes.serving = serving;
  recipes.ingredient = ingredient;

  recipes
    .save()
    .then((result) => {
      console.log("Saved successfully:", result);
    })
    .catch((error) => {
      console.error("Error saving:", error);
    });

  res.send({ message: "done successfully" });
});
