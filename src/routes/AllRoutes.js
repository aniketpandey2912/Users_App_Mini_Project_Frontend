import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/about" element={<About />}>
        About
      </Route>
      <Route path="/signup" element={<SignUp />}>
        SignUp
      </Route>
      <Route path="/login" element={<Login />}>
        Home
      </Route>
    </Routes>
  );
};

export default AllRoutes;
