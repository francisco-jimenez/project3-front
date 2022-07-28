import TinderCard from 'react-tinder-card'
import Food from './Food'
import { useState,useEffect } from "react"
import service from '../services/service';

import { Routes, Route, useParams } from 'react-router-dom';



// ...

function Tinder (){
  const [foodList,setFoodList]= useState([]);
  const { filterByType } = useParams();
  
  
  useEffect(()=>{
    if(filterByType === undefined){
      service.get("/projects")
      .then(res=>{setFoodList(res.data)})
    }else{
      service.get(`/tinder/${filterByType}`)
      .then(res=>{setFoodList(res.data)})
    }
    
  },[]);

  const onSwipe = (direction, food) => {
    console.log('You swiped: ' + direction)
    console.log('´Has hecho swipe de:')

    if(direction === "right"){
      service.post(`/foods/favorites/${food._id}`)   
    }
   
  
    //Si direction === right
    //Meto la cmida en array vacio  DE USE CONTENT (tengo todos los datos)
    //Salvo a favoritos en BBDD?


    //Este evento debe llamar a un endpoint POST /favorites/:îdUser/:idFood
    //1. Crea este endpoint disponible en back
      //El endpoint debe:^
      //Hacer User.findByIdAndUpdate
      //Usando el id del user y haciendo un $push de mongoose a user.favorites con el el id de la comida


}


    
  
      return (
        <div>
        
          <div style={{height:"600px",overflow: "hidden", width:"fit-content", margin:"auto"}}>
           
           {foodList.map((food) => (
           <TinderCard onSwipe= {(direction) => onSwipe(direction, food) } preventSwipe={['down']}>
           <Food {...food}/>

         
           </TinderCard>
       ))}

       
       </div>
        </div>
        
      ) 
}

export default Tinder

