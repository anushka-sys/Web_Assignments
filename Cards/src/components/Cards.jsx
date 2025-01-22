import React from "react";
import "./Card.css";
import Axios from "axios";
import { useState, useEffect } from "react";

const Cards = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact;
  }, []);

  return (
    <div className="main-div">
      <img src="https://picsum.photos/300/300" alt="card-image"></img>
      <h1 className="h1"> Cards</h1>
      <p className="card-description">Can Add more details for the card</p>
      <button onClick={fetchCatFact} id="btn">
        More
      </button>
      <p>{catFact}</p>
    </div>
  );
};


export default Cards;
