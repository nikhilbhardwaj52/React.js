
 import React from "react";
import ReactDOM from "react-dom/client";

// ✅ ClothCard component
function ClothCard(props)
{
 return( <div className="card" style={{textAlign:"center"  }}>
      <img src={props.photo} height="200px" width="200px"></img>
      <div className="bas" style={{border:"2px solid ",padding:"2px"}}>
        <h2>{props.cloth}</h2>
        <h1>{props.off}</h1>
        <h2>ShopNow</h2>
      </div>
  </div>)
}

//header
function Header(){
  return (
    <div className="heading">
      <img src="https://i.pinimg.com/736x/72/5d/42/725d42fb10fe3fbf5239b86897c55780.jpg" height="150px" width="100px" className="img"></img>
        
      
        <div className="option">
      <button className="dot">Men</button>
      <button className="dot">Kids</button>
      <button className="dot">Home and Living</button>
      <button className="dot">Beauty</button>
      <button className="dot">Studio</button>
      </div>
       <input className="search"placeholder="Search for products brands "></input>
    

    <div className="o">
      <button className="op">Profiles</button>
      <button className="op ">Wishlist</button>
      <button className="op">Bag</button>
    </div>

    </div>
  )
} 

//footer
function Footer(){
  return( 
    <div className="oo">
    <img className="im" src="https://raw.githubusercontent.com/salil-01/Myntra-Clone/refs/heads/main/images/discount-banner1.webp" width="1500px"></img>
    </div>
  )
};

//array 


const myntra = [
  { cloth: "T-Shirts", off: "20-80%", photo: "https://picsum.photos/id/1011/200/200" },
  { cloth: "Jeans", off: "30-70%", photo: "https://picsum.photos/id/1015/200/200" },
  { cloth: "Jackets", off: "40-60%", photo: "https://picsum.photos/id/1016/200/200" },
  { cloth: "Sweaters", off: "25-65%", photo: "https://picsum.photos/id/1018/200/200" },
  { cloth: "Shirts", off: "35-75%", photo: "https://picsum.photos/id/1020/200/200" },
  { cloth: "Trousers", off: "30-60%", photo: "https://picsum.photos/id/1024/200/200" },
  { cloth: "Dresses", off: "20-50%", photo: "https://picsum.photos/id/1025/200/200" },
  { cloth: "Skirts", off: "10-40%", photo: "https://picsum.photos/id/1027/200/200" },
  { cloth: "Shorts", off: "15-55%", photo: "https://picsum.photos/id/1033/200/200" },
  { cloth: "Blazers", off: "40-70%", photo: "https://picsum.photos/id/1035/200/200" },
  { cloth: "Sarees", off: "20-60%", photo: "https://picsum.photos/id/1036/200/200" },
  { cloth: "Kurtas", off: "25-55%", photo: "https://picsum.photos/id/1043/200/200" },
  { cloth: "Suits", off: "35-65%", photo: "https://picsum.photos/id/1050/200/200" },
  { cloth: "Track Pants", off: "30-50%", photo: "https://picsum.photos/id/1052/200/200" },
  { cloth: "Sportswear", off: "20-60%", photo: "https://picsum.photos/id/1060/200/200" },
  { cloth: "Hoodies", off: "35-75%", photo: "https://picsum.photos/id/1062/200/200" },
  { cloth: "Footwear", off: "20-70%", photo: "https://picsum.photos/id/1067/200/200" },
  { cloth: "Bags", off: "25-60%", photo: "https://picsum.photos/id/1070/200/200" },
  { cloth: "Watches", off: "30-80%", photo: "https://picsum.photos/id/1080/200/200" },
  { cloth: "Sunglasses", off: "20-50%", photo: "https://picsum.photos/id/1084/200/200" }
];




//main component
function Appp(){
  return(
    <>
    <Header/>
    <div className="bodyy"style={{display:"flex", gap:"10px", flexWrap:"wrap", padding:"20px", justifyContent:"center"}}>
      {myntra.map((value,index)=><ClothCard key={index} cloth={value.cloth} off={value.off} photo={value.photo}/>)
}
    </div>

    <Footer/>
    </>
  )
}
// ✅ Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <Appp />);
