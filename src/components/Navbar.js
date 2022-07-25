import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import logo from "../MatchEatLogo.png";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div class="navbar">
    <nav >
    <img style={{width:"14rem"}} src={logo} alt="#" />
      <Link to="/" className="menu-bars">
        <button>Home</button>
      </Link>
-
      {isLoggedIn
        ? (<>
            <Link to="/projects">
              <button>projects</button>
            </Link>
            <Link to="/favorites">
              <button>Favorites</button>
            </Link>
            <button onClick={logOutUser}>Logout</button>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Link to="/signup"> <button>Signup</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>)
      }
    </nav>
    </div>
  );
}

export default Navbar;