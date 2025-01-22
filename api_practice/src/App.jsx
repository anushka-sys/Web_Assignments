import { useState ,useEffect} from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredicteAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io?name=${name}`).then((res) =>{
      setPredicteAge(res.data);
    });
  };

  return (
    <>
      <h3>Display age of the person</h3>
      <h4>Enter Name of person</h4>

      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="input"
        placeholder="Ex. Anushka"
      ></input>

      <button onClick={fetchData} id="btn">
        Find Age!
      </button>
      <p>Name: {predictedAge?.name}</p>
      <p>Predicted Age:{predictedAge?.age}</p>
    </>
  );
}

export default App;
