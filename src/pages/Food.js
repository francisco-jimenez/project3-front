import axios from "axios"

import { Link } from "react-router-dom"

import TinderCard from 'react-tinder-card'



function Food({
    _id,name,image, type,restaurant, link,                        
    }){




return(
    

      <div key={_id} id="container">	
	
	<div class="product-details">
		
	<h1>{name}</h1>

		
			<p class="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>

		
<div class="control">
	
	<button class="btn">
	 <span class="price">$250</span>
   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
   <span class="buy">Get now</span>
 </button>
	
</div>
		
			
</div>
	
<div class="product-image">
	
	<img  src={image} alt=""/>
	

<div class="info">
	<h2> Description</h2>
	<ul>
		<li><strong>QUIERO <a target="_blank" href={link} style={{textDecoration:"none"}}>{restaurant}</a>!</strong></li>
		<li><strong>Shade : </strong>Olive green</li>
		<li><strong>Decoration: </strong>balls and bells</li>
		
		
	</ul>
</div>
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