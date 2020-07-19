import React  from 'react';
import { Container } from '../../components/Grid';
import Toggle from '../../components/ToggleShow/toggle';
import Adddog from '../../components/AddDogForm/addDogForm';
import { user } from '../../utils/API';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import style from './style.css';



export default (props) => {
	return (
		<Container>
			{console.log(props.dog)}
			<div className='card'>
					{/* <img className='card-img-top' alt='Dog Profile Image'></img> */}
					<div className='card-body'>
						<h2 className='card-title miniProfileFont'>{props.user.name}</h2>
						<p className='card-text miniProfileFont'>{props.user.email}</p>
					</div>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'><button>
						<Toggle title='Add Dog'>
							<Adddog {...props}/>
						</Toggle></button></li>
						<li className='list-group-item'><button>Edit Dog Profile</button></li>
						<Link to ='/dogprofiles'><Button theme='dark'>Dog Profile</Button></Link>
					</ul> 
					
				</div>

		</Container>
	)
};

