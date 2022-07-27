import logo from "../MatchEatLogo.png";
import background from "../allyouneed.png"
import patata from "../patata.jpg"
import { Link } from "react-router-dom";
import bgImage from ".././Foodporn.mp4";

function HomePage() {
  return (
    <div className="container">
      <video autoPlay loop muted>
				<source src={bgImage} type="video/mp4" />
			</video>
      <div>
      <Link to="/tinder">
        <button>¿No das match con tu media naranja? Hazlo con tu comida favorita!</button>
      </Link>
      <h1 className="title-home">¿Que plan tienes hoy?</h1>
      <Link to="/tinder/1">
        <button>Netflix and Chill</button>
      </Link>
      <Link to="/tinder/2">
        <button>Con los amiguetes</button>
      </Link>
      <Link to="/tinder/3">
        <button>Una date</button>
      </Link>
      </div>
      
    </div>

  );
}

export default HomePage;