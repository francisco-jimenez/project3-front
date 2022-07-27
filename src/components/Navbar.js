import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import logo from "../MatchEatLogo.png";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div class="navbar" style={{margin:"0", padding: "0"}}>
    <nav >
    <Link to="/">
    <img class="logo" style={{width:"14rem"}} src={logo} alt="#" />
    </Link>
  

      {isLoggedIn
        ? (<>
        <div class="nav.links">
            <Link to="/tinder">
              <button class="btn btn-white btn-animation-1" style={{marginRight:"10px"}}>Haz swipe!</button>
            </Link>
            <Link to="/favorites">
              <button class="btn btn-white btn-animation-1" style={{marginRight:"10px"}}>Tus Match</button>
            </Link>
            <Link to="/"><button class="btn btn-white btn-animation-1" onClick={logOutUser} style={{marginRight:"10px"}}>Logout</button></Link>
            <span style={{marginRight:"25px", color:"#ffffff"}}>{user.name}</span>
            </div>
          </>)
        : 
        (<>
         
        </>)
      }
    </nav>
    </div>
  );
}

export default Navbar;