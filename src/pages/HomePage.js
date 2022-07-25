import logo from "../MatchEatLogo.png";
import background from "../allyouneed.png"
import patata from "../patata.jpg"
import { Link } from "react-router-dom";
import videoBack from "../"
import { AuthContext } from "./../context/auth.context"
import { useContext } from "react";

function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <div style={{ backgroundImage: `url(${patata})` , width: "95rem" , height: "100rem" , marginTop: "0", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <span>Hola, {user.name}</span>
          <br>
          </br>
      <Link to="/tinder">
              <button className="intro">¿No das match con tu media naranja? Hazlo con tu comida favorita!</button>
            </Link>
    </div>
  );
}

export default HomePage;