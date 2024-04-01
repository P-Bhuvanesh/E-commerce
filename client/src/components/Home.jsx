import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import slides from "../mock.json";



function Home() {
  return (
    <div>
      <Navbar />
      {/* Home */}
      <Slider slides = {slides}/>
      
    </div>
  );
}

export default Home;
