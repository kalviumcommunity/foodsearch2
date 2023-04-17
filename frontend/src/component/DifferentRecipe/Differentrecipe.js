import React, { useEffect, useState } from "react";
import "./Differentrecipe.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Differentrecipe() {
  const { foodType, country } = useParams();
  // console.log(foodType, country);

  const [advice, setAdvice] = useState([]);

  const API =
    process.env.REACT_APP_API +`/recipe?country=${country}&foodtype=${foodType}`;
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data);
      })
      .catch((err) => {
        console.log(console.error);
      });
  }, [country, foodType]);

  console.log(advice);
  return (
    <>
    <Navbar/>
      <div className="subcategory">
        <div className="subcategory-image">
        <img
          src="https://azbindaas.com/wp-content/uploads/2020/11/roti.jpg"
          alt="country"
        ></img>
        </div>
        <div className="subcategory-container">
          {advice.map((eac, index) => {
            return (
              <Link to={`/indian/${eac._id}`} className="abc">
                <div key={index} className="subcategory-box">
                  <img className="img" src={eac.image} alt="image_" />
                  <div className="subcategory-names">
                    <h2 className="subcategory-name">{eac.name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
