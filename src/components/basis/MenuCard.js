import React from "react";
import "./style.css";

const MenuCard = ({ Data }) => {
  //   console.log(Data);
  return (
    <>
      <section className="main-card--cointainer">
        {Data.map((cur) => {
          return (
            <>
              <div className="card-container" key={cur.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {cur.id}
                    </span>
                    <span className="card-author subtle">{cur.category}</span>
                    <h2 className="card-title">{cur.name}</h2>
                    <span className="card-description subtle">
                      {cur.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={cur.image} alt="image" className="card-media" />
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
