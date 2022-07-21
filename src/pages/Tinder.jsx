import TinderCard from 'react-tinder-card'
import Food from './Food'
import { useState,useEffect } from "react"
import service from '../services/service';
import logo from "../MatchEatLogo.png";


// ...

function Tinder (){
  const [foodList,setFoodList]= useState([]);
useEffect(()=>{
service.get(`/projects`)
.then(res=>{setFoodList(res.data)})
},[]);

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}
    
  
      return (
        <div>
          <div>
            <img style={{width:"400px"}} src={logo} alt="#" />
          </div>
          <div style={{border: "3px black solid", width: "40%", margin: "auto", overflow: "hidden", height: "270px"}}>
           
           {foodList.map((food) => (
           <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['down']}>
           <Food {...food}/>

         
           </TinderCard>
       ))}

       
       </div>
        </div>
        
      ) 
}

export default Tinder

