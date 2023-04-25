import React from "react";
import "./Recipe.css";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

function Recipe() {
  const { id } = useParams();
  console.log(id);
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => console.log(recipeData), [recipeData]);

  useEffect(() => {
    const API = process.env.REACT_APP_API + `/recipe/${id}`;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data);
      });
  }, [id]);

  console.log(recipeData.ingredient);
  return (
    <>
      <Navbar />
      <div className="recipe-container">
        <div className="recipe-video">
          <iframe
            src={recipeData.video}
            title={recipeData.name}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          {/* <img
            src={recipeData.image}
            height={200}
            alt="image_data"
            onClick={() => window.open(recipeData.video)}
          /> */}
        </div>
        <div className="recipe-discription">
          <div className="recipe-name">
            <h1>{recipeData.name}</h1>
          </div>
          <div className="recipe-abc">
            <div className="like">
              {/* <Fclike /> */}
              like
            </div>
            <div className="save">Save</div>
            {/* <Link to="/save">
              <button className="btn">Save</button>
            </Link> */}
          </div>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <div className="Ingredients-list">
            {recipeData.ingredient &&
              recipeData.ingredient.map((e) => {
                return (
                  <ul>
                    <li>{e.ingredientName}</li>
                  </ul>
                );
              })}
          </div>
        </div>
        <div className="recipe-page">
          <h2>Recipe</h2>
          <div className="method">
            <ol>
              {/* <p>{recipeData.recipe}</p> */}
              {recipeData.recipe &&
                recipeData.recipe.map((e) => {
                  return <li>{e.recipeList}</li>;
                })}
            </ol>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Recipe;
