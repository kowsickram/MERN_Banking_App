import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./Wolf.png";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
const imageUrls = [
  image1,
  image2,
  image3,
  // Add more image URLs as needed
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
  };

  return (
    <div className="bg-transparent flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="#" className="w-80" />
      <br />
      <br />
      <div className="w-80 h-30 m-4">
        <Slider {...settings}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="w-100 h-40 ">
              <img
                src={imageUrl}
                alt="#"
                className="w-full h-full object-cover  rounded-2xl"
              />
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
}
