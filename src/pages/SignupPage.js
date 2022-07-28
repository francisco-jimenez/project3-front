import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signupService } from '../services/auth.services';


function SignupPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ name, setName ] = useState('');
  const navigate = useNavigate();
	const [ errorMessage, setErrorMessage ] = useState(undefined);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleName = (e) => setName(e.target.value);

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		// Create an object representing the request body
		const requestBody = { email, password, name };
    try{
      await signupService(requestBody);
      navigate("/login");
    }catch(err){
      if(err.response?.status === 400){
        setErrorMessage(err.response.data.errorMessage);
        console.log(errorMessage);
      }
    }
  };

	return (
		<div class="registration-form">
        <form onSubmit={handleSignupSubmit}>
            <div class="form-icon">
                <span><i class="icon icon-user"></i></span>
            </div>
            <div class="form-group">
                <input type="text" name="name" value={name} onChange={handleName} class="form-control item" id="username" placeholder="Username" />
            </div>
            <div class="form-group">
                <input type="password" name="password" value={password} onChange={handlePassword} class="form-control item" id="password" placeholder="Password" />
            </div>
            <div class="form-group">
                <input type="text" name="email" value={email} onChange={handleEmail} class="form-control item" id="email" placeholder="Email" />
            </div>
            
           
            <div class="form-group">
                <button type="submit" class="btn btn-block create-account">Create Account</button>
            </div>
        </form>
        <div class="social-media">
            <h5>Visit us</h5>
            <div class="social-icons" sty>
                <a target='_blank' style={{marginRight:"25px", textDecoration:"none"}} href="https://github.com/belendi1999">B</a>
                <a target='_blank' style={{marginRight:"25px", textDecoration:"none"}} href="https://github.com/CristianMP04">C</a>
                <a target='_blank' style={{marginRight:"25px", textDecoration:"none"}} href="https://github.com/NicMad4">N</a><br />
				
            </div>
        </div>
    </div>
		// <div className="SignupPage">
		// 	<h1>Sign Up</h1>

		// 	<form onSubmit={handleSignupSubmit}>
		// 		<label>Email:</label>
		// 		<input type="text" name="email" value={email} onChange={handleEmail} />

		// 		<label>Password:</label>
		// 		<input type="password" name="password" value={password} onChange={handlePassword} />

		// 		<label>Name:</label>
		// 		<input type="text" name="name" value={name} onChange={handleName} />

		// 		<button type="submit">Sign Up</button>
		// 	</form>

		// 	{errorMessage && <p className="error-message">{errorMessage}</p>}

		// 	<p>Already have account?</p>
		// 	<Link to={'/login'}> Login</Link>
		// </div>
	);
}

export default SignupPage;
