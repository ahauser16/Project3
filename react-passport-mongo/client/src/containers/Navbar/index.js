import React from 'react';
import { Button } from '../../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { user as userAPI } from '../../utils/API';
import style from "./style.module.css";
import Logo from "./pawWALK_Logo.png";
import Settings from "./settingsIcon.png"

const Navbar = props => {
	const signout = () => {
		userAPI
			.signout()
			.then(() => props.setUser({}))
			.catch(e => {
				throw e;
			});
	};

	// get location from react router location hook
	let location = useLocation();

	console.group('navbar');
	console.info(`🌎 page rendered at path: '${location.pathname}'`, '\n');
	console.info('🤖 user', props.user);
	console.groupEnd();

	return (
		<div
			style={{ padding: 4, color: '#f3c623', lineHeight: '20px', backgroundColor: "#f3c62350" }}
		>
			<Link to='/'>
				<img src={Logo} className={`btn`} ></img>
			</Link>
			{props.user._id
				? <Link to='/settings'>
					<img src={Settings} className={`btn`} ></img>
				</Link>

				: <></>
			}
			{props.user._id
				? <Button theme='default' onClick={signout}><i className='fa fa-sign-out fa-1x' style={{color: '#f3c623', fontSize: '40px'}} aria-hidden='true'></i></Button>


				: location.pathname === '/signup'
					? <Link to='/login'><Button theme='default' style={{color: '#f3c623'}}>Login</Button></Link>
					: <Link to='/signup'><Button theme='default' style={{color: '#f3c623'}}>Signup</Button></Link>
			}

		</div>
	);
};
export default Navbar;
