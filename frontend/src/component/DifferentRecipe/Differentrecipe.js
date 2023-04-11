import React, { useEffect, useState } from "react";
import "./Differentrecipe.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Differentrecipe() {
  const { foodType, country } = useParams();
  // console.log(foodType, country);

  const [advice, setAdvice] = useState([]);

  const API =
    process.env.REACT_APP_API +
    `/recipe?country=${country}&foodtype=${foodType}`;
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
      <div className="subcategory">
        {country} {foodType}
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
