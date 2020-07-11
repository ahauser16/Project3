import React, { Component } from 'react';
import { user as userAPI } from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import Card from '../../components/Card';

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: ''
		};
	}
	// functions for getting data from db below

	render() {
		return (
			<Container>
				{/* <Row> */}
				{/* <Col size='4'> */}
				{/* <Card> */}
				{/* this.state.name and this.state.email */}
				{/* <img>Dog Picture?</img> */}
				{/* <h1>Template Name</h1> */}
				{/* <p>template Email</p> */}

				{/* </Card> */}
				{/* </Col> */}
				{/* </Row> */}

				<div className='card' style={{ width: '18rem' }}>
					<img className='card-img-top' src='...' alt='Dog Profile Image'></img>
					<div className='card-body'>
						<h2 className='card-title'>User's Name</h2>
						<p className='card-text'>User's Email</p>
					</div>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'><button>Add a Dog</button></li>
						<li className='list-group-item'><button>Edit Dog Profile</button></li>
						<li className='list-group-item'><button>Other Settings?</button></li>
					</ul> 
					
				</div>
			</Container>
		);
	}
}

export default Settings;
