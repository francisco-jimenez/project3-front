import service from "../services/service"
import {useEffect, useState} from 'react'

function Favorites(){

    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        service.get("/favorites")
        .then((res) => {
            setFavorites(res.data.favorites)
        })
        .catch((err) => console.log(err))
    }, [])

    console.log(favorites)


return(
    <div>
           
        <h1>Favoritess:</h1>
        {favorites.map((favorite) => 
             <div key={favorite._id}>
             <h3>{favorite.name}</h3>
             <img height='100px' src={favorite.image}/> 
             <h4>{favorite.type}</h4>
             <a target="_blank" href={favorite.link}>{favorite.restaurant}</a>
             </div>
        )}
            
    

    </div>
)
        }
export default Favorites