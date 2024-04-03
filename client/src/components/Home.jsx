import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import slides from "../mock.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Slider.css";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../styles/Home.css";

function Home() {
  // const data = [
  //   {
  //     slides: [
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //     ],
  //   },
  //   {
  //     slides: [
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //     ],
  //   },
  //   {
  //     slides: [
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //       "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
  //     ],
  //   },
  // ];

  const shirts = [
    {
      img: "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://images.jackjones.com/12181602/3531158/001/jackjones-slimfitcheckedshirt-red.jpg?v=eeac9fa59e9eb35f74ae063a26dba886",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
  ];

  return (
    <div className="home">
      <Navbar />
      <Slider slides={slides} />
      {/* <div className="home-containers">
        {data.map((container, index) => (
          <div className="home-container" key={index}>
            <p>view more</p>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              centeredSlides = {true}
              pagination={{
                type: "fraction",
              }}
              className="mySwiper"
            >
              {container.slides.map((image, imageIndex) => (
                <SwiperSlide key={imageIndex}>
                  <div className="home-card">
                    <img src={image} alt={`Slide ${imageIndex + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div> */}
      <div className="home-slide">
        Branded New Arrival Shirts
        <div className="navto">View more</div>
        <div className="slider-content">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides = {true}
            pagination={{
              type: "fraction",
            }}
            className="mySwiper"
          >
            <div className="home-shirt-gallery">
              {shirts.map((shirt) => {
                return (
                  <SwiperSlide>
                    <img src={shirt.img} alt="shirt" />
                    <h1>{shirt.name}</h1>
                    <p> {shirt.offer} </p>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="home-slide">
        Branded New Arrival Shirts
        <div className="navto">View more</div>
        <div className="slider-content">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            className="mySwiper"
          >
            <div className="home-shirt-gallery">
              {shirts.map((shirt) => {
                return (
                  <SwiperSlide>
                    <img src={shirt.img} alt="shirt" />
                    <h1>{shirt.name}</h1>
                    <p> {shirt.offer} </p>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="home-slide">
        Branded New Arrival Shirts
        <div className="navto">View more</div>
        <div className="slider-content">
          <Swiper
            slidesPerView={4}
            spaceBetween={80}
            pagination={{
              type: "fraction",
            }}
            className="mySwiper"
          >
            <div className="home-shirt-gallery">
              {shirts.map((shirt) => {
                return (
                  <SwiperSlide>
                    <img src={shirt.img} alt="shirt" />
                    <h1>{shirt.name}</h1>
                    <p> {shirt.offer} </p>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
