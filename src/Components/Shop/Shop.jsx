import React from "react";
import Meals from "./components/Meals.jsx";
import "./shop.css";
import NavBar from "../HomePage/NavBar/NavBar.jsx";

export default function Shop() {
  return (
    <>
      <NavBar />
      <div className="bod mt-36">
        {/* <Header /> */}
        <Meals />
      </div>
    </>
  );
}
