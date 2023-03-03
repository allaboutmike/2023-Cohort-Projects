import React from "react";

function Card({item}){

    return(
        <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img className="br-100 h3 w3 dib alt={item.ingredient}" src={process.env.PUBLIC_URL + item.imgPath}/> 
            <div>
                <h2>{item.ingredient}</h2>
                <p>{item.calories}</p>
            </div>
        </div>
    )
}

export default Card;