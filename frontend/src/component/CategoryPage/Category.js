import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Category() {
  const { id } = useParams();
  console.log(id);
  const [recipeData, setRecipeData] = useState({ subCategory: [] });

  useEffect(() => console.log(recipeData), [recipeData]);

  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data);
      });
  }, [id]);

  const subcategory = recipeData.subCategory;
  console.log(subcategory);

  return (
    <>
      <div className="display-img">
        <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6553.jpg" alt="country"></img>
      </div>
      <div className="category-heading">
        <h1 className="type-of-recipe">{recipeData.country} Food</h1>
      </div>

      <div className="category-container">
      {subcategory.map((e) => {
          return (
            <Link className="abc">
              <div className="category-box">
                <img className="img" src={e.foodImage} alt={e.foodType} />
                <div className="category-names">
                  <h2 className="category-name">{e.foodType}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
