const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv");
const Category = require("./Model/Category");

//environment variable or you can say constants
env.config();

const port = process.env.PORT;

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

app.get("/category",async (req, res) => {
  const category=await Category.find()
  res.send(category);
});

app.post("/category", (req, res) => {
  const { country, countryImage, subCategory } = req.body;
  const category = new Category();

  category.country = country;
  category.countryImage = countryImage;
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
