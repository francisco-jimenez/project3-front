import axios from "axios"

import { Link } from "react-router-dom"

import TinderCard from 'react-tinder-card'



function Food({
    _id,name,image, type,restaurant, link,                        
    }){




return(
    <div>
           
       <div> <h1>Dale Love a tu comida:</h1></div>
        
            <div key={_id}>
            <h3>{name}</h3>
            <Link to={`/food/${_id}`} > <img height='100px' src={image}/> </Link>
            <h4>{type}</h4>
            <a target="_blank" href={link}>{restaurant}</a>



            </div>
            
    

    </div>
)
        }
export default Food