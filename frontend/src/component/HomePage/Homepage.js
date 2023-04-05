import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Homepage.css";

function Homepage() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(category);
  return (
    <div className="Homepage">
      <div className="image-courosel">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <div className="image">
              <img
                src="https://i0.wp.com/swadishta.de/wp-content/uploads/2021/01/Idle.jpg?fit=1200%2C800&ssl=1"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src="https://cdn.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src="https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src="https://visualeducation.com/wp-content/uploads/2019/08/Home-cooking-2148.jpg"
                alt="img"
              />
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="country">
        {/* <h1 className='cuisine'>Cuisine</h1> */}
        <div className="cuisine-container">
          {category.map((e, index) => {
            return (
              <div key={index} className="cuisine-box">
                <img
                  src={e.countryImage}
                  alt="img"
                />
                <h2>{e.country} Food</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
