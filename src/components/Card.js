import React from 'react';
import 'tachyons';


const Card = ({id, name, email, contact}) => {
        return(
        <div className = "pa3 serif f7 tc grow  dib br3 ma2 robotContainer">
            <div className="bg-yellow pa3 ma2">
            <img alt="robot" src={`https://robohash.org/${id}`} />

            <p>{name}</p>
            <p>{email}</p>
            <p>{contact}</p>
            </div>
        </div>
        )
}

export default Card;