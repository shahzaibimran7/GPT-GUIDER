import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
export default Routers;
