import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import "./Navbar.css";

function Searchbar() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);


  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    const searchList = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/recipe`
      );
      setData(res.data);
    };
    searchList();
  }, []);


  const reverseSearch = () => {
    const searchForm = document.querySelector(".input-wrapper");
    searchForm.classList.toggle("active");
    setValue("");
  };


   
  return (
    <div className="menu-bar">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="dropDown" onClick={reverseSearch}>
                {data
                  .filter((e) => {
                    const searchedTerm = value.toLocaleLowerCase().trim();
                    let RecipeName = e.name;
                    const recipeName = RecipeName.toLocaleLowerCase().trim();

                    return (
                      (searchedTerm && recipeName.startsWith(searchedTerm)) ||
                      (recipeName === searchedTerm && recipeName !== searchedTerm)
                    );
                  })
                  .slice(0, 5)
                  .map((i, index) => {
                    return (
                      <>
                        <Link className="abc" to={`/indian/${i._id}`} key={index}>
                          <div
                            className="search-recipe-div"
                            onClick={() => setValue(i.name)}
                          >
                            <div>
                              <h2>
                                {i.name}
                              </h2>
                            </div>
                          </div>
                        </Link>
                      </>
                    );
                  })}
              </div>
            </div>
  );
}

export default Searchbar;

