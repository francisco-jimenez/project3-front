import axios from "axios"

import { Link } from "react-router-dom"

import TinderCard from 'react-tinder-card'



function Food({
    _id,name,image, type,restaurant, link,                        
    }){




return(
    

      <div key={_id} id="containerdos">	
      
	
	<h3>{name}</h3>

	
<div class="foodimage">
	
	<img  src={image} alt="" height="250px"/>
	
</div>
<div class="tinder--buttons">
<br/>
    <button id="nope">nope</button>
    <button id="love">love</button>
  </div>
</div>
     
      

     
     
     )
    }
    {/* <div> <h1>Dale Love a tu comida:</h1></div>
     
         <div key={_id}>
         <h3>{name}</h3>
          <img height='100px' src={image}/> 
         <h4>{type}</h4>
         <a target="_blank" href={link}>{restaurant}</a>

 

         </div> */}
         
 
export default Food