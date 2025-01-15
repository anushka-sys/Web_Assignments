
import { useState } from 'react';
import './App.css'

function App() {
  const [age, setAge] = useState(0);
  
  const increaseage = () =>{
   setAge(age+1);
  }


  return (
    <>
      <div className='App'>
      <h1>Increase age</h1>
       <h4>{age}</h4> 
        <button onClick={increaseage}>Increase age!</button>
     
      </div>
    </>
  )
}

export default App
