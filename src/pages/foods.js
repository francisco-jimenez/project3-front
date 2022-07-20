import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import service from '../services/service';


function Foods(){
const [foodList,setFoodList]= useState([]);
useEffect(()=>{
service.get(`/projects`)
.then(res=>{setFoodList(res.data)})
},[]);

return(
    <div>
           
        <h1>Comidillas Guenas </h1>
        {foodList.map((food) => (
            <div key={food._id}>
            <h3>{food.name}</h3>
            <Link to={`/food/${food._id}`} > <img height='100px' src={food.image}/> </Link>
            <h4>{food.type}</h4>
            <a target="_blank" href={food.link}>{food.restaurant}</a>



            </div>
        ))}

    </div>
)
        }
export default Foods