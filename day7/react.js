
//manUAL do manpulation
import React,{useState} from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  let [count,setcount] =useState(0);

  function incre() {
    setcount(count+1);
    
  }

  function decre() {
    
    setcount(count-1);
    
  }

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={incre} className="inc">Increment{count}</button>
      <button onClick={decre} className="dec">Decrement{count}</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
