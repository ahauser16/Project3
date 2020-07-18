import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Map from './pages/Map/Map';
//==================================================================================
import { user as userAPI } from "./utils/API";
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Settings from './pages/Settings';
import Alert from './components/Alert';
import Navbar from './containers/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from './components/ProtectedRoute';
// import Map from './pages/Map';
// import { user as userAPI } from "./utils/API";
import { dog as dogAPI } from "./utils/API";
// import Home from './pages/Home';
//==================================================================================
import TravelTimeRouteCall from './components/TravelTimeRouteCall/TravelTimeRouteCall'

//===================================================================================
import './App.css';
import DogProfiles from './pages/DogProfiles';

//====================================================================================

const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
	//================================================
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [alertInfo, setAlertInfo] = useState({message:"", theme:"success"});
	const [dog, setDog] = useState({});

	useEffect(() => {
		// no catch, add if you want to check for it.
		// only setting user if we got one, to avoid rerendering the page.
		userAPI.authenticate()
			.then(res => res.data ? setUser(res.data) : 0);
	}, []);
	//================================================

	return (
		<>
			<Router>
				<Route render={props =>
					<Navbar user={user} setUser={setUser} {...props} />
				} />
				<LoadingSpinner isLoading={loading} />
				<Switch>
					<Route
						exact
						path='/'
						render={props => (
							<Login
								{...props}
								{...{ user, setUser, setLoading, setAlertInfo }}
							/>
						)}
					/>
					<Route
						path='/login'
						render={() => <Redirect to="/" />}
					/>
					<Route
						path='/traveltime'
						component={TravelTimeRouteCall}
					/>
					{/* <Route
						path='/traveltime'
						component={TravelTimeRadiusCall}
					/> */}
					<Route
						exact
						path='/signup'
						render={props =>
							<Signup
								{...props}
								user={user}
								setUser={setUser}
								setLoading={setLoading}
								setAlertInfo={setAlertInfo}
							/>
						}
						{...{ user, setUser, setLoading, setAlertInfo }} />
					{/* <ProtectedRoute exact path="/home" {...{user, loading, Component: Home} } /> */}
					<Route path="/settings"
						render={props =>
						<Settings 
							{...props}
							user={user}
							setUser={setUser}
							dog={dog}
							setDog={setDog}
							/>
							}>
					</Route>
					{/* <Route path="/"/> */}
					{/* <ProtectedRoute exact path="/home" {...{user, loading, Component: Home} } /> */}

					<Route exact path="/home" 
						component={Map} 
					/>
					<Route 
						exact path = "/dogprofiles"
						render ={props =>
							<DogProfiles 
								{...props}
								user={user}
								dog={dog}
								/>
						}
					/>

					<Route component={NoMatch} />


				</Switch>
			</Router>
			{alertInfo.message
				? <Alert alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
				: <></>
			}

			<TravelTimeRouteCall />

			{/* <TravelTimeRadiusCall /> */}

		</>
	);
}

export default App;
