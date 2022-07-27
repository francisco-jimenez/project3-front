import service from "../services/service";
import { useEffect, useState } from "react";
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";


function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service
      .get("/favorites")
      .then((res) => {
        setFavorites(res.data.favorites);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function deleteFavorite(favoriteId) {
    service
      .delete(`/favorites/${favoriteId}`)
      .then((res) => {
        const filteredfavorites = favorites.filter((favorite) => {
          return favorite._id !== favoriteId;
        });

        setFavorites(filteredfavorites);
      })
      .catch((err) => console.log(err));
  }

  return (
      <div>
     
      <h1>Favorites:</h1>
      {!loading ? (
        favorites.map((favorite) => {
          return (
            <div id="container" key={favorite._id}>
	
	<div class="product-details">
		
	<h3>{favorite.name}</h3>

		
		

		
<div class="control">
	
<Link to={"/review/"+favorite._id}>
                <button>See reviews</button>
              </Link>
  <br/>
  <br/>
  <button onClick={() => deleteFavorite(favorite._id)} className="btn btn-danger">Delete 
  <span style={{ color: "black" }}></span>

  </button>
</div>
		
			
</div>
	
<div class="product-image">
	
	<img  src={favorite.image} alt="" style={{width:"auto", float: "right"}}/>
	

<div class="info">
	<h2> Description</h2>
	<ul>
		<li><strong>I WANT <a target="_blank" href={favorite.link} style={{textDecoration:"none"}}>{favorite.restaurant}</a>!</strong></li>
		<li><strong><a href={favorite.href} target="_blank"  style={{textDecoration:"none"}}>GO TO</a> </strong>{favorite.restaurant}</li>
			
		
	</ul>
    

</div>
</div>

</div>
            
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

{/* <div key={favorite._id}>
              <h3>{favorite.name}</h3>
              <img height="100px" src={favorite.image} />
              <h4>{favorite.type}</h4>
              <a target="_blank" href={favorite.link}>
                {favorite.restaurant}
              </a>
              <br></br>

              <iframe
                width="425"
                height="350"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src={favorite.ubicacionLink}
              ></iframe>
              <br />
              <small>
                <a href={favorite.href} target="_blank">
                  Ver mapa más grande
                </a>
              </small>

              <br></br>
              <button
                onClick={() => deleteFavorite(favorite._id)}
                className="btn btn-danger"
              >
                Delete <span style={{ color: "black" }}></span>
                </button>
              <Link to={"/review/"+favorite._id}>
                <button>See reviews</button>
              </Link>
              <AddReview foodId={favorite._id} />
            </div> */}
export default Favorites;
