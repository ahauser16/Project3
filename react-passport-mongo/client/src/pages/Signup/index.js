import React, { Component } from 'react';
import './style.css';
import { user as userAPI } from '../../utils/API';
import { Redirect } from 'react-router-dom';
import Navbar from '../../containers/Navbar/index';
// import Route from 'react-router-dom';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			password: '',
			passwordConf: ''
		};
	}

	componentDidMount() {}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		// this.props.setLoading(true);

		// validate all fields
		if (!this.state.email || !this.state.password || !this.state.passwordConf) {
			// this.props.setLoading(false);
			// set error alert to user
			return this.props.setAlertInfo({
				theme: 'warning',
				message: 'Please fill all required fields'
			});
		}

		// validate pass === to pass confirmation.
		if (this.state.password.trim() !== this.state.passwordConf.trim()) {
			// this.props.setLoading(false);
			// set error alert to user
			return this.props.setAlertInfo({
				theme: 'warning',
				message: 'Your password fields do not match.'
			});
		}

		// if good to go
		userAPI
			.signup({
				name: this.state.name.trim(),
				email: this.state.email.trim(),
				password: this.state.password.trim(),
				passwordConf: this.state.passwordConf.trim()
			})
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					this.props.setUser(res.data);
					// this.props.setLoading(false);
					return <Redirect to='/home' />;
				} else {
					// this.props.setLoading(false);
					this.props.setAlertInfo({
						theme: 'warning',
						message: res.response.data
					});
				}
			})
			.catch(err => {
				// this.props.setLoading(false);
				console.log(err.response.data);
				this.props.setAlertInfo({ theme: 'warning', message: err.response.data });
			});
	};

	render() {
		return (
			<>
				{/* <div className='wrapper'> */}
					<div className='container'>
						<form className='form' onSubmit={this.handleFormSubmit}>
							<input
								value={this.state.name}
								onChange={this.handleInputChange}
								name='name'
								placeholder='Name'
							/>
							<input
								value={this.state.email}
								onChange={this.handleInputChange}
								name='email'
								placeholder='Email'
							/>
							<input
								value={this.state.password}
								onChange={this.handleInputChange}
								name='password'
								placeholder='Password'
								type='password'
							/>
							<input
								value={this.state.passwordConf}
								onChange={this.handleInputChange}
								name='passwordConf'
								placeholder='Password'
								type='password'
							/>

							<button
								disabled={
									!(
										this.state.email &&
										this.state.password &&
										this.state.passwordConf
									)
								}
							>
								signup
							</button>
						</form>
					</div>

					{/* redirect on authenticated */}
					{this.props.user && this.props.user._id ? (
						<Redirect to='/home' />
					) : (
						<div></div>
					)}

					<div className='paw-print-1'>
						<div className='pad large'></div>
						<div className='pad small-1'></div>
						<div className='pad small-2'></div>
						<div className='pad small-3'></div>
						<div className='pad small-4'></div>
					</div>

					<div className='paw-print-2'>
						<div className='pad large'></div>
						<div className='pad small-1'></div>
						<div className='pad small-2'></div>
						<div className='pad small-3'></div>
						<div className='pad small-4'></div>
					</div>

					<div className='paw-print-3'>
						<div className='pad large'></div>
						<div className='pad small-1'></div>
						<div className='pad small-2'></div>
						<div className='pad small-3'></div>
						<div className='pad small-4'></div>
					</div>

					<div className='paw-print-4'>
						<div className='pad large'></div>
						<div className='pad small-1'></div>
						<div className='pad small-2'></div>
						<div className='pad small-3'></div>
						<div className='pad small-4'></div>
					</div>

					<div className='paw-print-5'>
						<div className='pad large'></div>
						<div className='pad small-1'></div>
						<div className='pad small-2'></div>
						<div className='pad small-3'></div>
						<div className='pad small-4'></div>
					</div>

					<div className='paw-print-6'>
						<div className='pad large'></div>
						<div className='pad small-1'></div>
						<div className='pad small-2'></div>
						<div className='pad small-3'></div>
						<div className='pad small-4'></div>
					</div>

					<div className='paw-print-7'>
						<div className='pad large'></div>
						<div className='pad small-1'></div>
						<div className='pad small-2'></div>
						<div className='pad small-3'></div>
						<div className='pad small-4'></div>
					</div>

					<div className='paw-print-8'>
						<div className='pad large'></div>
						<div className='pad small-1'></div>
						<div className='pad small-2'></div>
						<div className='pad small-3'></div>
						<div className='pad small-4'></div>
					</div>
				{/* </div> */}
			</>
		);
	}
}

export default Signup;
