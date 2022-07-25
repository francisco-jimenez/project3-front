import logo from "../MatchEatLogo.png";
import background from "../allyouneed.png"
import patata from "../patata.jpg"
import { Link } from "react-router-dom";
import videoBack from "../"

function HomePage() {
  return (
    <div style={{ backgroundImage: `url(${patata})` , width: "95rem" , height: "100rem" , marginTop: "0", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      
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
  );
}

export default HomePage;