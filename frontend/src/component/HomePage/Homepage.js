import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Searchbar from "../Navbar/Searchbar";
import {
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper";

function Homepage() {
  const [category, setCategory] = useState([]);
  let API = process.env.REACT_APP_API + "/category";
  useEffect(() => {
    fetch(API)
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
      <Navbar />
      <Searchbar />

      <div className="image-courosel">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect={"fade"}
          grabCursor={false}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          fadeEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            crossFade: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[
            Autoplay,
            EffectFade,
            EffectCoverflow,
            Pagination,
            Navigation,
          ]}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="image">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e06cd854344503.59575b1721d15.jpg"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src="https://i.redd.it/8ih18a1hi6851.jpg" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src="https://b.zmtcdn.com/data/pictures/3/18933213/224820871f5e4a5f0574ab612d7ffe6c.jpg"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img
                src="https://cdn.tasteatlas.com/images/dishes/dc21b62214df4bd195d8cc6736c53e29.jpg?m=facebook"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-forword-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="aboutus">
        <div className="aboutus-container">
          <h1>Welcome to CraveSavor</h1>
          <h2>DISCOVER OUR STORY</h2>
          <div>
            when you want to make someting you go to youtube and search the
            recipe but you end up finding so many video of same recipe and you
            don't know which one is good, to find best video you watch so many
            video which take lot of time. To sole this problem I am making this
            website where you can find best video on youtube and there recipe.
          </div>
          <div>
            
          </div>
          <Link to="/about-us">
            <button className="buttn">Read More</button>
          </Link>
        </div>
        <div className="aboutus-image">
          <img
            src="https://i1.adis.ws/i/canon/pro-inside-professional-food-photography-1_46a998f373b44dc583ee52d9448ece04?$media-collection-full-dt-jpg$"
            alt="imge"
          />
        </div>
      </div>

      <div className="country">
        {/* <div className="country-image">
          <img alt="img" src="https://www.fotor.com/blog/wp-content/uploads/2020/07/steak-1024x684.jpg"></img>
        </div> */}

        <h1>Country</h1>
        <div className="cuisine-container">
          {category.map((e, index) => {
            return (
              <Link className="abc" to={`/country/${e.country}/${e._id}`}>
                <div key={index} className="cuisine-box">
                  <img src={e.countryImage} alt="img" />
                  <div className="cuisine-name">
                    <h2>{e.country} Food</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
