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
    </div>
  );
}

export default HomePage;