import { Link } from "react-router-dom";
import bgImage from ".././Foodporn.mp4";

import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

function FilterPage() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="container">
      <video autoPlay loop muted>
				<source src={bgImage} type="video/mp4" />
			</video>
      <div>
      <div class="box">
      <h1 class="line-1 anim-typewriter">¿Qué plan tienes hoy?</h1>
          
          
          
          {isLoggedIn
        ? (<>

      <Link to="/tinder/1">
        <button class="btn btn-white btn-animation-1" style={{marginRight:"15px"}}>Netflix and Chill</button>
      </Link>
      <Link to="/tinder/2">
        <button class="btn btn-white btn-animation-1" style={{marginRight:"15px"}}>Con los amiguetes</button>
      </Link>
      <Link to="/tinder/3">
        <button class="btn btn-white btn-animation-1">Con Una date</button>
      </Link>
      
      </>)
      :
      (<>
        </>)
      }
      </div>
      
      

     




      </div>
      
    </div>

  );
}

export default FilterPage;