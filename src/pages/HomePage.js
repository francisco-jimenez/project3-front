import logo from "../MatchEatLogo.png";
import background from "../allyouneed.png"
import patata from "../patata.jpg"
import { Link } from "react-router-dom";
import bgImage from ".././Foodporn.mp4";
import {useEffect, useState} from 'react'
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <div className="container">
      <video autoPlay loop muted>
				<source src={bgImage} type="video/mp4" />
			</video>
      <div>
     
      <h1 className="title-home">¿Que plan tienes hoy?</h1>

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