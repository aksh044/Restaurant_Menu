import React, { useState } from "react";
import "./style.css";
import Navbar from "./Navbar";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const uniqueCat = [
    ...new Set(
      Menu.map((cur) => {
        return cur.category;
      })
    ),
    "All",
  ];
  // console.log(uniqueCat);

  const filterfun = (cat) => {
    if (cat === "All") {
      setMenuData(Menu);
      return;
    }
    const newdata = Menu.filter((cur) => {
      return cur.category === cat;
    });
    setMenuData(newdata);
  };
  return (
    <>
      <Navbar filterfun={filterfun} uniqueCat={uniqueCat} />
      <MenuCard Data={menuData} />
    </>
  );
};

export default Restaurant;
