import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

function Foods(){
const [foodList,setFoodList]= useState([]);
useEffect(()=>{
axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
.then(res=>{setFoodList(res.data)})
},[setFoodList]);

return(
    <div>
           
        <h1>here u have all beeersss</h1>
        {foodList.map((food) => (
            <div key={food._id}>
            <h3>{food.name}</h3>
            <Link to={`/beer/${food._id}`} > <img height='100px' src={food.image_url}/> </Link>
            <h4>{food.tagline}</h4>
            <h5>{food.contributed_by}</h5>



            </div>
        ))}

    </div>
)
        }
export default Foods