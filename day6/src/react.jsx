
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "../compotents/card";
import Footer from "../compotents/Footer";
import Header from "../compotents/header";
import myntra from "./utils/dummy";

// Main component
function Appp(){
  let [Arr,setA]=useState(myntra);
function sorted()
{
  const sortedarr=[...Arr].sort((a,b)=>a.price-b.price);
      setA(sortedarr);
}
function Filter()
{
   const sortedarr=[...Arr].filter((value)=>value.price>1200)
   setA(sortedarr);

}
  return (
    <>
      <Header />
      <button onClick={sorted}>Sort by Price (Low to High)</button>
      <button onClick={Filter}>Filter by Price</button>
      <div
        className="bodyy"
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {Arr.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            off={value.off}
            photo={value.photo}
            price={value.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

// ✅ Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appp />);
