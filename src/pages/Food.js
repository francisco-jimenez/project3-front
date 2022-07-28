import axios from "axios"

import { Link } from "react-router-dom"

import TinderCard from 'react-tinder-card'

import flechas from "../flechas.png"

import FavoriteIcon from '@mui/icons-material/Favorite';

import check from "../check.png"
import close from "../close.png"
import arrowleft from "../left-arrow.png"
import arrowright from "../right-arrow.png"





function Food({
    _id,name,image, type,restaurant, link,                        
    }){




return(
  
  
  <div id="flechas">	


      <div key={_id} id="containerdos">
<div class="foodimage">
	
	<img  src={image} alt="" height="350px" width="350px"/>
	
</div>

	<h4 style={{marginTop:"15px", fontSize:"20px"}}>{name}</h4>
  <img id="arrowleft" src={arrowleft} alt="" style={{marginRight:"15px"}}/>
  <img id="close" src={close} alt="" style={{marginRight:"15px"}}/>
  <img id="check" src={check} alt="" style={{marginRight:"15px"}}/>
  <img id="arrowright" src={arrowright} alt=""/>

  


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