import React  from 'react';
import { Container } from '../../components/Grid';
import Toggle from '../../components/ToggleShow/toggle';
import Adddog from '../../components/AddDogForm/addDogForm';
// import {} from '../../utils/API/dogAPI';


export default (props, {Dog}) => {
	return (
		<Container>
			
			<div className='card' style={{ width: '18rem' }}>
					<img className='card-img-top' src='...' alt='Dog Profile Image'></img>
					<div className='card-body'>
						<h2 className='card-title'>{props.user.name}</h2>
						<p className='card-text'>{props.user.email}</p>
					</div>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'><button><Toggle title='Add Dog'>
							<Adddog props={Dog} />
						</Toggle></button></li>
						<li className='list-group-item'><button>Edit Dog Profile</button></li>
						<li className='list-group-item'><button>Other Settings?</button></li>
					</ul> 
					
				</div>

		</Container>
	)
};

