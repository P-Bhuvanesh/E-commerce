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
    const shirts = [
    {
      img: "https://lzd-img-global.slatic.net/g/p/873d216f4381dc9b249b2c932069d965.jpg_720x720q80.jpg",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/320044/1.jpg?7338",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://www.dhresource.com/webp/m/0x0/f2/albu/g22/M00/B6/55/rBNaEmI7_GCAf4_-AACRwmpNlko529.jpg",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://img.fruugo.com/product/4/57/466188574_max.jpg",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://i.pinimg.com/564x/85/5c/b2/855cb29133d36f242dc4a60a960a3cfb.jpg",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://i5.walmartimages.com/asr/054ffef4-a3b9-46d0-ac22-71f78054d871.46a8f7f7c6052269d3d0b8e3243f5d1b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
    {
      img: "https://i5.walmartimages.com/seo/Men-s-Dress-Shirts-Clearance-Long-Sleeve-Smart-Casual-Plain-Button-Shirt-Non-Iron-Solid-Turn-Down-Collar-Business-Regular-Fit-Stretch-Wedding-Work-Of_1736fe1d-be9f-4faa-9945-6f585e200071.cda46b90619b6483b2bd7bdf31426745.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Shirt",
      offer: "50%-60% OFF",
    },
  ];

  const watches = [
    {
      img : "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-main-configurator/c_limit,w_800/v1/catalogue/2023-06/upright-c/m124273-0001",
      name:"Rolex Explore 36",
      offer:"₹1,033,500.00 INR*"
    },
    {
      img : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaedd4de9/images/Titan/Catalog/90102SM01_1.jpg?sw=800&sh=800",
      name:"Titan Quartz",
      offer:"₹10,695.00 INR*"
    },
    {
      img : "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7699a5ab/images/Fastrack/Catalog/3287NM02_1.jpg?sw=800&sh=800",
      name:"Fastrack Kronos",
      offer:"₹3,449.00 INR*"
    },
    {
      img : "https://assets.ajio.com/medias/sys_master/root/20230803/cHdg/64cbbd58a9b42d15c9895aba/-473Wx593H-469514333-blue-MODEL.jpg",
      name:"French Collection",
      offer:"₹3,478.00 INR*"
    },  
    {
      img : "https://img0.junaroad.com/uiproducts/19592018/zoom_0-1679638859.jpg",
      name:"Happy Khajana",
      offer:"₹299 INR*"
    },
    {
      img : "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcb1d377b/images/Fastrack/Catalog/3255NM01_4.jpg?sw=800&sh=800",
      name:"Fastrack Stunners",
      offer:"₹2,395.00 INR*"
    },
    {
      img : "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-main-configurator/c_limit,w_800/v1/catalogue/2023-06/upright-c/m126506-0001",
      name:"Rolex Cosmograph Daytona",
      offer:"₹6,669,000.00 INR*"
    },  
    {
      img : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24316624/2023/8/3/fdbddead-77a4-4223-9f4f-496cccf26f411691051741895FrenchConnectionMenDialStainlessSteelBraceletStyleStrapsAnal2.jpg",
      name:"French Collection FCN",
      offer:"₹1,935.00 INR*"
    },  
    {
      img : "https://sslimages.shoppersstop.com/sys-master/images/h9c/h01/30179932995614/WTITWEG21906_NoColour_alt1.jpg_2000Wx3000H",
      name:"TimeX TWE",
      offer:"₹7,916.00 INR*"
    },  
    {
      img : "https://assets.ajio.com/medias/sys_master/root/20230426/Tlc1/64493d08d55b7d0c6380874f/-473Wx593H-469445412-blue-MODEL.jpg",
      name:"TimeX Toned Watch",
      offer:"₹2,500.00 INR*"
    },  


  ]
  
  const shoes = [
    {
      img : "https://cdn.plutosport.com/m/catalog/product/P/u/Puma-Skyrocket-Lite-Hardloopschoenen-Senior-2401301212_1.jpg?profile=product_page_image_medium&3=2",
      name:"Puma Skyrocket",
      offer:"₹4,950.500 INR*"
    },
    {
      img : "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADBSBI4289.jpg",
      name:"Adidas Baseliner",
      offer:"₹4,799.00 INR*"
    },
    {
      img : "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/195569/05/fnd/IND/fmt/png/Softride-Enzo-Nxt-Youth-Running-Shoes",
      name:"Puma Softride Enzo",
      offer:"₹4,499.00 INR*"
    },
    {
      img : "https://assets.ajio.com/medias/sys_master/root/20230704/Ly7z/64a43ebeeebac147fc4b875e/-473Wx593H-460930005-black-MODEL3.jpg",
      name:"Adidas Pictor M",
      offer:"₹2,879.00 INR*"
    },
    {
      img : "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194774/21/fnd/IND/fmt/png/Rift-Slip-On-Pop-Kids'-Shoes",
      name:"Puma Rift Slip",
      offer:"₹3,199.00 INR*"
    },
    {
      img : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/877d30e7-4880-46f8-aa71-6704eb7d944d/air-max-plus-shoes-Z0D37G.png",
      name:"Nike Air Max Plus",
      offer:"₹15,995.00 INR*"
    },
    {
      img : "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/giay-the-thao-adidas-galaxy-6-gw4143-mau-xanh-navy-size-44-63b3a707625f4-03012023105447.jpg",
      name:"Adidas Shawat",
      offer:"₹2,399.00 INR*"
    },
    {
      img : "https://media.karousell.com/media/photos/products/2023/11/8/nike_air_jordan_1_low_unc_1699423887_3f54d51e_progressive.jpg",
      name:"Nike Air Jordan",
      offer:"₹8,995.00 INR*"
    },
    {
      img : "https://cdn.plutosport.com/m/catalog/product/P/u/Puma-Skyrocket-Lite-Hardloopschoenen-Senior-2401301212_1.jpg?profile=product_page_image_medium&3=2",
      name:"Puma Skyrocket",
      offer:"₹4,950.50 INR*"
    },
    {
      img : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7ba43f2-2b8b-4d40-ad8a-311be94b5501/vomero-17-road-running-shoes-49tSC9.png",
      name:"Nike Vomero 17",
      offer:"₹14,247.00 INR*"
    },
    {
      img : "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379438/02/fnd/IND/fmt/png/Conduct-Pro-Unisex-Running-Shoes",
      name:"Puma Conduct Unisex",
      offer:"₹7,999.00 INR*"
    },
    {
      img : "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376560/01/fnd/AUS/fmt/png/Softride-Premier-One8-Youth-Walking-Shoes",
      name:"Puma Softride One8",
      offer:"₹3,999.00 INR*"
    },
    {
      img : "https://rukminim2.flixcart.com/image/850/1000/kfvfwy80-0/shoe/q/s/w/f36483-adidas-ftwwht-cblack-ftwwht-original-imafw8gfetx9azc5.jpeg?q=90&crop=false",
      name:"Adidas Grand Court",
      offer:"₹3,599.00 INR*"
    },

  ]
  return (
    <div className="home">
      <Navbar />
      <Slider slides={slides} />
      
      <div className="home-slide">
        Latest Arrival Shoes
        <div className="navto">View more</div>
        <div className="slider-content">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}            
            className="mySwiper"
          >
            <div className="home-shirt-gallery">
              {shoes.map((shirt) => {
                return (
                  <SwiperSlide>
                    <img src={shirt.img} alt="shirt" />
                    <h2>{shirt.name}</h2>
                    <p> {shirt.offer} </p>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="home-slide">
        Watches For Mens
        <div className="navto">View more</div>
        <div className="slider-content">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}            
            className="mySwiper"
          >
            <div className="home-shirt-gallery">
              {watches.map((shirt) => {
                return (
                  <SwiperSlide>
                    <img src={shirt.img} alt="shirt" />
                    <h2>{shirt.name}</h2>
                    <p> {shirt.offer} </p>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="home-slide">
        Bluetooth and Speakers
        <div className="navto">View more</div>
        <div className="slider-content">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}
            // scrollbar={{ draggable: true }}
            // pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
          >
            <div className="home-shirt-gallery">
              {watches.map((shirt) => {
                return (
                  <SwiperSlide>
                    <img src={shirt.img} alt="shirt" />
                    <h2>{shirt.name}</h2>
                    <p> {shirt.offer} </p>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="home-slide">
        Formal Comfort Shirts
        <div className="navto">View more</div>
        <div className="slider-content">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}
            // scrollbar={{ draggable: true }}
            // pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
          >
            <div className="home-shirt-gallery">
              {shirts.map((shirt) => {
                return (
                  <SwiperSlide>
                    <img src={shirt.img} alt="shirt" />
                    <h2>{shirt.name}</h2>
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
