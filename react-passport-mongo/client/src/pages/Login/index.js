import React, { Component } from 'react';
import { user as userAPI } from '../../utils/API';
import { Redirect } from 'react-router-dom';
import './style.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		};
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value.trim()
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.email && this.state.password) {
			console.log(this.state.email);

			// set loading state
			this.props.setLoading(true);

			userAPI
				.login({
					email: this.state.email,
					password: this.state.password
				})
				.then(res => {
					if (res.status === 200) {
						console.log(res.status);
						this.props.setLoading(false);
						this.props.setUser(res.data);
					}
				})
			// .catch(err => {
			// 	this.props.setLoading(false);
			// 	console.warn(err.response.data);
			// 	this.props.setAlertInfo({
			// 		theme: 'warning',
			// 		message: err.response.data
			// 	});
			// });
		}
	};

	render() {
		return (
		<>
			{/* <div className="wrapper"> */}
				<div className="container">
					<h1>Welcome</h1>

					<form onSubmit={this.handleFormSubmit}>
						<input type="text" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}
							name='email' />
						<input type="password" placeholder="Password" value={this.state.password}
							onChange={this.handleInputChange} name='password' />
						<button type="submit" id="login-button" disabled={!(this.state.email && this.state.password)}
							onClick={this.handleFormSubmit}>
							Login
                </button>
					</form>
				</div>
				<div className="paw-print-1">
					<div className="pad large"></div>
					<div className="pad small-1"></div>
					<div className="pad small-2"></div>
					<div className="pad small-3"></div>
					<div className="pad small-4"></div>
				</div>

				<div className="paw-print-2">
					<div className="pad large"></div>
					<div className="pad small-1"></div>
					<div className="pad small-2"></div>
					<div className="pad small-3"></div>
					<div className="pad small-4"></div>
				</div>

				<div className="paw-print-3">
					<div className="pad large"></div>
					<div className="pad small-1"></div>
					<div className="pad small-2"></div>
					<div className="pad small-3"></div>
					<div className="pad small-4"></div>
				</div>

				<div className="paw-print-4">
					<div className="pad large"></div>
					<div className="pad small-1"></div>
					<div className="pad small-2"></div>
					<div className="pad small-3"></div>
					<div className="pad small-4"></div>
				</div>

				<div className="paw-print-5">
					<div className="pad large"></div>
					<div className="pad small-1"></div>
					<div className="pad small-2"></div>
					<div className="pad small-3"></div>
					<div className="pad small-4"></div>
				</div>

				<div className="paw-print-6">
					<div className="pad large"></div>
					<div className="pad small-1"></div>
					<div className="pad small-2"></div>
					<div className="pad small-3"></div>
					<div className="pad small-4"></div>
				</div>

				<div className="paw-print-7">
					<div className="pad large"></div>
					<div className="pad small-1"></div>
					<div className="pad small-2"></div>
					<div className="pad small-3"></div>
					<div className="pad small-4"></div>
				</div>

				<div className="paw-print-8">
					<div className="pad large"></div>
					<div className="pad small-1"></div>
					<div className="pad small-2"></div>
					<div className="pad small-3"></div>
					<div className="pad small-4"></div>
				</div>
				{/* Redirect on authentication */}
				{this.props.user && this.props.user._id ?
					<Redirect to='/home' /> : <></>}
			{/*  </div> */}
			</>
		);
	}
}

export default Login;
