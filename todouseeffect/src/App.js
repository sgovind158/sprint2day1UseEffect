import React, { useState } from "react";
import "./App.css"
import Timer from "./componets/Timer";
import Todos from "./componets/Todos";
import StopWatch from "./componets/StopWatch";

const App = () => {
  const [showData,setShowData] = useState(true)

  return (
      <>
    <div className="App" > {showData ?  <Timer/> : <Todos/>}
    
    <button onClick={()=>setShowData(!showData)}> show here</button>
    </div>
  <h1 className="App"> <StopWatch /></h1> 
    </>
  ) 
}

export default App;
