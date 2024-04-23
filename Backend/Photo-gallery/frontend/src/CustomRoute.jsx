import { Route, Routes } from "react-router";
import React from 'react'
import Register from "./Register.jsx";
import Home from "./Home.jsx";
import Image from "./Image.jsx";
import ViewImage from "./ViewImage.jsx";

function CustomRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/image" element={<Image/>} />
      <Route path="/image/viewimage/:imageURL" element={<ViewImage/>} />
      <Route path="/api/v1/users/register" element={<Register/>} />
    </Routes>
  )
}

export default CustomRoute