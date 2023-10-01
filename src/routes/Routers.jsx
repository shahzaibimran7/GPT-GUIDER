import React from "react";
import { Routes, Route, useNavigate,Navigate } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import { auth } from "../firebase-config";

const Routers = () => {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  return (
    <Routes>
      {currentUser ? (
        <>
          <Route path="/" element={<Home />} />
          {/* Redirect to Home if logged in */}
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/signup" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Redirect to Login if not logged in */}
          <Route path="/" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default Routers;
