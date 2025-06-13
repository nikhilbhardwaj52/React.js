// index.js
import React from "react";
import ReactDOM from "react-dom/client";


function greet(name)
{
  return <h1>hello coder army {name}</h1>
}

const newElement = (
  <>
    <h1 style={{color:"black",backgroundColor:"yellow"}}>Hello Coder Army</h1>
    <h2>hello ji</h2>
  </>
);
const funct=greet("name");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(funct);
