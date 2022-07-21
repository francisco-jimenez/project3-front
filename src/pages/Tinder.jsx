import TinderCard from 'react-tinder-card'
import Food from './Food'
import { useState,useEffect } from "react"
import service from '../services/service';
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
        <div style={{border: "3px black solid", width: "40%", margin: "auto", overflow: "hidden"}}>
            
            {foodList.map((food) => (
            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['down']}>
            <Food {...food}/>

          
            </TinderCard>
        ))}

        
        </div>
      ) 
}

export default Tinder

