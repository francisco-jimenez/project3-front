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

    function deleteFavorite(favoriteId) {
        service.delete(`/favorites/${favoriteId}`)
        .then((res) => {
            const filteredfavorites = favorites.filter((favorite) => {
             return favorite._id !== favoriteId;
                });
                
            setFavorites(filteredfavorites);
            console.log(favoriteId)
           
        })
        .catch((err) => console.log(err))
    };



return(
    <div>
           
        <h1>Favoritess:</h1>
        {favorites.map((favorite) => 
             <div key={favorite._id}>
             <h3>{favorite.name}</h3>
             <img height='100px' src={favorite.image}/> 
             <h4>{favorite.type}</h4>
             <a target="_blank" href={favorite.link}>{favorite.restaurant}</a>
             <br></br>

             <iframe  width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={favorite.ubicacionLink}></iframe><br/><small><a href={favorite.href} target="_blank">Ver mapa más grande</a></small>
             
             <br></br>
             <button onClick={() => deleteFavorite(favorite._id)} className="btn btn-danger">
            Delete <span style= {{color: "black"}}></span>
                </button>

             </div>
             
        )}
            
    

    </div>
)
        }
export default Favorites