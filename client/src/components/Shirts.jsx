import React from "react";
import s1 from "../assets/Shirt1.jpg";
import s2 from "../assets/Shirt2.jpg";
import s3 from "../assets/Shirt3.jpg";
import s4 from "../assets/Shirt4.jpg";
import s5 from "../assets/Shirt5.jpg";
import s6 from "../assets/Shirt6.jpg";
import "../styles/Shirts.css";
import StarIcon from "@mui/icons-material/Star";
import Navbar from "./Navbar";

const Shirts = () => {
  const shirtCatalog = [
    {
      name: "Plain Blue",
      price: 12500,
      desc: "Lorem",
      img: s1,
      rating: 3.5,
    },
    {
      name: "Formal Grey",
      price: 1250,
      desc: "Lorem",
      img: s2,
      rating: 3.8,
    },
    {
      name: "Striped Dark Blue",
      price: 1250,
      desc: "Lorem",
      img: s3,
      rating: 4.1,
    },
    {
      name: "Black Striped",
      price: 1250,
      desc: "Lorem",
      img: s4,
      rating: 4.6,
    },
    {
      name: "Plain Black",
      price: 1250,
      desc: "Lorem",
      img: s5,
      rating: 3.8,
    },
    {
      name: "Shirt Designer",
      price: 1250,
      desc: "Lorem",
      img: s6,
      rating: 3.8,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="parent">
        <div className="prod">Shirts Section</div>
      </div>

      <div className="gallery">
        {shirtCatalog.map((product) => {
          return (
            <div className="content">
              <img src={product.img} alt="logo" />
              <h1>{product.name}</h1>
              <p>{product.desc}</p>
              <p>{product.price}</p>
              <p>
                Rating: {product.rating}
                <span className="rating">
                  <StarIcon />
                </span>
              </p>
              <button className="buy1">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shirts;
