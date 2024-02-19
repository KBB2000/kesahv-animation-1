import React from "react";
import "./Card.css"
import Session from "../Session/Session";

const Card = () => {
  return (
    <>
      <div className="containers " data-aos="fade-left">
        <div className="card cont" style={{ width: "25rem", height: "25rem" }}>
          <div className="card-body">
            <h1 className="text-center">🙂</h1>
            <h5 className="card-title">Argu Promostional Work</h5>
            <p class="card-text text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias recusandae suscipit neque repellendus
            </p>
          </div>
        </div>
        <div className="card conts" style={{ width: "25rem", height: "25rem" }}>
          <div className="card-body">
            <h1 className="text-center">☹️</h1>
            <h5 className="card-title">Get Promostion on Work</h5>
            <p class="card-text text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias recusandae suscipit neque repellendus 
            </p>
          </div>
        </div>
        <div className="card conts1" style={{ width: "25rem", height: "25rem" }}>
          <div className="card-body">
            <h1 className="text-center">🙃</h1>
            <h5 className="card-title">Get Promostion on Work</h5>
            <p class="card-text text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias recusandae suscipit neque repellendus
            </p>
          </div>
        </div>
        <div className="card conts2" style={{ width: "25rem", height: "25rem" }}>
          <div className="card-body">
            <h1 className="text-center">😬</h1>
            <h5 className="card-title">Get Promostion on office</h5>
            <p class="card-text text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias recusandae suscipit neque repellendus
            </p>
          </div>
        </div>
      </div>
      <Session />
    </>
  );
};

export default Card;
