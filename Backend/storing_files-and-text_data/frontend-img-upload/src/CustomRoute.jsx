import { Route, Routes } from "react-router";
import React from 'react'
import Register from "./Register.jsx";
import Home from "./Home.jsx";

function CustomRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/api/v1/users/register" element={<Register/>} />
    </Routes>
  )
}

export default CustomRoute