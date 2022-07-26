import service from "../services/service"
import {useEffect, useState} from 'react'
import AddReview from "../components/AddReview"

function Favorites(){

    const [favorites, setFavorites] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        service.get("/favorites")
        .then((res) => {
            setFavorites(res.data.favorites)
            console.log(res.data.favorites)
            setLoading(false)
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
        {!loading ? favorites.map((favorite) => {
        return(
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
             <AddReview foodId={favorite._id} />
             </div>
             
             )}
             ): <h1>loading</h1>}
            
    

    </div>
)
        }
export default Favorites