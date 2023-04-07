import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";
function Landingpage() {
  return (
    <div className="landingpage">
      <div className="content">
        {/* <h1>Welcome</h1>
          <h2>to</h2> */}
        <h1>CraveSavor</h1>
        <div className="pragraph-container"></div>
        <div className="pragraph">
          Add a pinch of love and a dash of creativity to your kitchen
        </div>
        <div className="pragraph">adventures with our delicious recipes and videos!</div>
        <Link to="/home">
          <button className="button">Explore More</button>
        </Link>
      </div>
      <div className="image-content">
        <img
          alt="src"
          src="https://images.squarespace-cdn.com/content/v1/569507d7b204d52491fda8ff/1676325073388-HHX2ZPWNM9NPVIN9IU08/SkylerBurtFoodPhotography0016.jpg?format=2500w"
        />
      </div>
    </div>
  );
}

export default Landingpage;
