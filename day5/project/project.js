import React from "react"
import ReactDOM from "react-dom/client"

function card(props)
{
    return (
        <div>
            <img src="https://stylequotient.co.in/cdn/shop/files/AW24SQARTI_GR-1.jpg?v=1729164593" height="200px" width="200px" ></img>
            <div style={{border:"2px solid black",padding:"2px"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.off}</h1>
                <h2>Show now</h2>
            </div>
        </div>
    )
}

const arr=[{cloth:"T-shirts",off:"30-50%off"},{cloth:"patloom",off:"40-50off"}]


function appp()
{
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
           {
            arr.map((Value,index)=><card key={index} cloth={value.cloth} off={value.off}/>)
            
           }
           
        </div>
        
        
    )
}



const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<appp/>)