


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
     
      <h1 class="line-1 anim-typewriter">¿No haces match con tu media naranja?<br /> Pues hazlo con la comida!</h1>
      <Link to="/signup"> <button>Signup</button> </Link>
          <Link class="button-login" to="/login"> <button>Login</button> </Link>

      {isLoggedIn
        ? (<>

      <Link to="/tinder/1">
        <button>Netflix and Chill</button>
      </Link>
      <Link to="/tinder/2">
        <button>Con los amiguetes</button>
      </Link>
      <Link to="/tinder/3">
        <button>Una date</button>
      </Link>
      
      </>)
      :
      (<>
        </>)
      }




      </div>
      
    </div>

  );
}

export default HomePage;