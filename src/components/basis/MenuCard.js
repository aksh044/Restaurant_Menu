import React from "react";
import "./style.css";

const MenuCard = ({ Data }) => {
  //   console.log(Data);
  return (
    <>
      <section className="main-card--cointainer">
        {Data.map((cur) => {
          //destructuring
          const { id, category,price,name, description, image } = cur;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">{price}</div>
                  </div>
                  <img src={image} alt="{name}" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
