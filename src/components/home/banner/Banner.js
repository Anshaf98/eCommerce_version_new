import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Banner.css";

const data = [
  "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7621381/pexels-photo-7621381.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/9588211/pexels-photo-9588211.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Banner = () => {
  return (
    <>
      <Carousel
        className="carasousel"
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "#fff",
            color: "#494949",
            borderRadius: 0,
            marginTop: -22,
            height: "104px",
          },
        }}
      >
        {data.map((imag, i) => {
          return (
            <>
              <img src={imag} alt="img" key={i} className="banner_img" />
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;
