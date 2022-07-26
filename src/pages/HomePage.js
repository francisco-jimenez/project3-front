import logo from "../MatchEatLogo.png";
import background from "../allyouneed.png"
import patata from "../patata.jpg"
import { Link } from "react-router-dom";
import bgImage from ".././Foodporn.mp4"

function HomePage() {
  return (
    <div className="container">
      {/* <video autoPlay loop muted>
				<source src={bgImage} type="video/mp4" />
			</video> */}
      <div>
      <Link to="/tinder">
        <button>¿No das match con tu media naranja? Hazlo con tu comida favorita!</button>
      </Link>
      <h1>¿Que plan tienes hoy?</h1>
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
      <iframe  width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=2.1739384531974797%2C41.39027557248726%2C2.1773877739906315%2C41.39160163546612&amp;layer=mapnik"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/41.39094/2.17566">Ver mapa más grande</a></small>
    </div>

  );
}

export default HomePage;