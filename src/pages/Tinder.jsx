import TinderCard from 'react-tinder-card'
import Food from './Food'
import { useState,useEffect } from "react"
import service from '../services/service';
import logo from "../MatchEatLogo.png";



// ...

function Tinder (){
  const [foodList,setFoodList]= useState([]);
  const [favorites, setFavorites]= useState([])
useEffect(()=>{
service.get(`/projects`)
.then(res=>{setFoodList(res.data)})
},[]);

const onSwipe = (direction, food) => {
  service.post(`/foods/favorites/${food._id}`, {prueba : "prueba"})
  console.log('You swiped: ' + direction)
  console.log('´Has hecho swipe de:')

  if(direction === "right"){
    favorites.push(food)
   
  }
  console.log(favorites)
  
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
          <div>
            <img style={{width:"400px"}} src={logo} alt="#" />
          </div>
          <div style={{border: "3px black solid", width: "40%", margin: "auto", overflow: "hidden", height: "270px"}}>
           
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

