import React from "react";
import Banner from "./banner/Banner";
import "./Home.css";
import Slide from "./Slide";

const Home = () => {
  return (
    <div className=" home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal of the Day" />
        </div>
        <div className="right_slide">
          <h4>Festive latest launches</h4>
          <img
            src="https://images.pexels.com/photos/6214470/pexels-photo-6214470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <a href="">See More</a>
        </div>
      </div>

      <Slide title="Today's Deal" />
      <div className="center_img">
        <img
          src="https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          height={300}
        />
      </div>
      <Slide title="Best Seller" />
      <Slide title="Upto 80% off" />
    </div>
  );
};

export default Home;
