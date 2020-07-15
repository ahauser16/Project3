import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Content from './components/TravelTimeRouteCall/TravelTimeRouteCall'
// import Home from './pages/Home';
// import Maptest from './pages/Maptest';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Alert from './components/Alert';
import Navbar from './containers/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from './components/ProtectedRoute';

//Map contains the geolocation method that finds the user's position
import Map from './pages/Map/Map';
// import RouteArray from './components/RouteArray/RouteArray';
import { user as userAPI } from "./utils/API";
import './App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;










function App() {
	//================================================
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [alertInfo, setAlertInfo] = useState({ message: "", theme: "success" });

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
						component={Content}
					/>
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

					<Route exact path="/home" component={Map} />

					<Route component={NoMatch} />


				</Switch>
			</Router>
			{alertInfo.message
				? <Alert alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
				: <></>
			}

			<TravelTimeRouteCall />
			{/* <RouteArray /> */}
		</>
	);
}
export default App;
