import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "../pages/UserPage";

const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
