import axios from "axios"

import { Link } from "react-router-dom"

import TinderCard from 'react-tinder-card'

import flechas from "../flechas.png"





function Food({
    _id,name,image, type,restaurant, link,                        
    }){




return(
    

      <div>	
      <h1>hola</h1>
      <div key={_id} id="containerdos">
<div class="foodimage">
	
	<img  src={image} alt="" height="350px" width="350px"/>
	
</div>

	<h4 style={{marginTop:"25px", fontSize:"20px"}}>{name}</h4>

  <img src={flechas} alt=""/>


<br/>
 
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