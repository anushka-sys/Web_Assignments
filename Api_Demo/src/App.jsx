import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  //  fetch ('https://catfact.ninja/fact')
  //  .then((res) => res.json())
  //    .then((data) => {
  //      console.log(data);
  //    });

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact;
  }, []);

  // Axios.get("https://catfact.ninja/fact").then((res) =>{
  //   setCatFact(res.data.fact);
  // });

  return (
    <>
      <center>
        <h1>Random Cat facts</h1>
        <div>
          <button id="btn" onClick={fetchCatFact}>
            CLick Here!
          </button>
          <p>{catFact}</p>
        </div>
      </center>
    </>
  );
}
export default App;
