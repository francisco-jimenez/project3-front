import { Link } from "react-router-dom";
import bgImage from ".././Foodporn.mp4";

import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="container">
      <video autoPlay loop muted>
				<source src={bgImage} type="video/mp4" />
			</video>
      <div>
      <div class="box">
      <h1 class="line-1 anim-typewriter">¿No haces match con tu media naranja?<br /> Pues hazlo con la comida!</h1>
          
          <Link to="/signup"> <button class="btn btn-white btn-animation-1" style={{marginRight:"15px"}}>Signup</button> </Link>
          <Link class="button-login" to="/login"> <button class="btn btn-white btn-animation-1">Login</button> </Link>
          
          {isLoggedIn
        ? (<>

      <Link to="/tinder/1">
        <button class="btn btn-white btn-animation-1">Netflix and Chill</button>
      </Link>
      <Link to="/tinder/2">
        <button class="btn btn-white btn-animation-1">Con los amiguetes</button>
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

export default HomePage;