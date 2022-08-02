import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 
import Favorites from './pages/Favorites';
import Tinder from './pages/Tinder';
import ReviewCard from './components/ReviewCard'
import FilterPage from './pages/Filtro';


function App() {
	return (
		<div className="App">
		
		    <Navbar />
		
			

			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/filtro" element={<FilterPage />} />
				<Route exact path="/tinder" element={<Tinder />} />
				<Route exact path="/review/:foodId" element={<ReviewCard />} />
				<Route exact path="/tinder/:filterByType" element={<Tinder />} />

				<Route
					exact
					path="/projects"
					element={
						<PrivateRoute>
							<ProjectListPage />
						</PrivateRoute>
					}
				/>
				<Route path="/favorites" element={ <Favorites />} />
				<Route
					exact
					path="/projects/:id"
					element={
						<PrivateRoute>
							<ProjectDetailsPage />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/signup"
					element={
						<AnonRoute>
							<SignupPage />
						</AnonRoute>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<AnonRoute>
							<LoginPage />
						</AnonRoute>
					}
				/>
			</Routes>
			
		</div>
	);
}

export default App;
