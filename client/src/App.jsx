import React from "react";
import Shirts from "./components/Shirts";
import Home from "./components/Home";
import Order from "./components/Orders";
import Kart from "./components/Kart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shirt" element={<Shirts />} />
        <Route path="/order" element={<Order />} />
        <Route path="/kart" element={<Kart />} />
      </Routes>
    </div>
  );
};
export default App;
