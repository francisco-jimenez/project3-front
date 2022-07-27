import { useState, useContext } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import { loginService } from '../services/auth.services';
import bgImage from ".././Foodporn.mp4";
import userLogo from ".././user.png";
import keyLogo from ".././key_01.png";

function LoginPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(undefined);
	const navigate = useNavigate();
	const { logInUser } = useContext(AuthContext);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		const requestBody = { email, password };

		try {
			const response = await loginService(requestBody);
			
			const token = response.data.authToken;
			logInUser(token);
			navigate('/');
		} catch (err) {
			const errorDescription = err?.response?.data?.message;
			setErrorMessage(errorDescription);
		}
	};

	return (
		<div class="container">
		 <video autoPlay loop muted>
				<source src={bgImage} type="video/mp4" />
			</video>
		<div class="row">
			<div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
				<div class="form-container">
				<form className="form-horizontal" onSubmit={handleLoginSubmit}>
						<h3 class="title">User Login</h3>
						<div class="form-group">
							<span class="input-icon"><img src={userLogo} style={{width:"25px"}} /></span>
							<input class="form-control" type="text" name="email" value={email} onChange={handleEmail} />
						</div>
						<div class="form-group">
							<span class="input-icon"><img src={keyLogo} style={{width:"25px"}} /></span>
							<input class="form-control" type="password" name="password" value={password} onChange={handlePassword} />
						</div>
						<span class="forgot-pass"></span>
						<button class="btn signin">Login</button>
						
					</form>
					
					
				</div>
			</div>
		</div>
	</div>
		// <div className="LoginPage">
		// 	<h1>Login</h1>

		// 	<form onSubmit={handleLoginSubmit}>
		// 		<label>Email:</label>
		// 		<input type="text" name="email" value={email} onChange={handleEmail} />

		// 		<label>Password:</label>
		// 		<input type="password" name="password" value={password} onChange={handlePassword} />

		// 		<button type="submit">Login</button>
		// 	</form>
		// 	{errorMessage && <p className="error-message">{errorMessage}</p>}

		// 	<p>Don't have an account yet?</p>
		// 	<Link to={'/signup'}> Sign Up</Link>
		// </div>
	);
}

export default LoginPage;
