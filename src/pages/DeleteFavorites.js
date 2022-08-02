// import service from "../services/service"
// import {useEffect, useState} from 'react'

// function DeleteFavorites(){

//     const [deleteFavorites, setDeleteFavorites] = useState([])
//     useEffect(() => {
//         router.delete("/favorites")
//         .then((res) => {
//             setFavorites(res.data.favorites)
//         })
//         .catch((err) => console.log(err))
//     }, [])

//     // function deleteFavorite(favoriteId) {
//     //     const filteredfavorites = favorites.filter((favorite) => {
//     //      return favorite._id !== favoriteId;
//     //         });
            
//     //     setFavorites(filteredfavorites);
//     //     console.log(favoriteId)
//     // };



// return(
//     <div>
           
//         <h1>Favoritess:</h1>
//         {favorites.map((favorite) => 
//              <div key={favorite._id}>
//              <h3>{favorite.name}</h3>
//              <img height='100px' src={favorite.image}/> 
//              <h4>{favorite.type}</h4>
//              <a target="_blank" href={favorite.link}>{favorite.restaurant}</a>
//              <br></br>
//              {/* <button onClick={() => deleteFavorite(favorite._id)} className="btn btn-danger">
//             Delete <span style= {{color: "black"}}>🗑️</span>
//                 </button> */}

//              </div>
             
//         )}
            
    

//     </div>
// )
//         }
// export default DeleteFavorites