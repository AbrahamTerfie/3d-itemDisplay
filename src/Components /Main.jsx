import React from "react";
import adidasShoe from "./adidas.png";
import './style.css'
import './animations'
export default function Main() {
  return (
    <div className="container">
      <div className="card">
        <div className="sneaker">
          <div className="circle">
            <img src={adidasShoe} alt="adidas"></img>
          </div>
          <div className="info">
            <h1 className="title"> Adidas XL</h1>
            <h3> SHOES FROM THE FUTURE , EXCEPTIONAL COMFORT </h3>
            <div className="sizes">
              <button>39</button>
              <button>40</button>
              <button className="active">41</button>
              <button>42</button>
            </div>
            <div className="purchase">
              <button>Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
