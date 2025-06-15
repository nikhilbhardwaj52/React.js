
function Card(props){
    return (
        <div className="card" style={{border:"2px solid black", padding:"2px"}}>
            <img src="https://printify.com/wp-content/uploads/2022/07/Custom-T-Shirts-Womens-T-Shirts.jpg" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h1>{props.cloth}</h1>
                <h2>{props.price}</h2>
                <h2>{props.off}</h2>
            </div>
        </div>
    )
}

export default Card;
