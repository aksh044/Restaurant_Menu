import React from "react";
// import Menu from "./MenuApi";

const Navbar = ({ filterfun, uniqueCat }) => {
  return (
    <>
    <h2 className="title">Food Menu</h2>
      <nav className="navbar">
        <div className="btn-group">
          {uniqueCat.map((cur) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterfun(cur)}
              >
                {cur}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
