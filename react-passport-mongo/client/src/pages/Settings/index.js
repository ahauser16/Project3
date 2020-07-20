import React  from 'react';
import Toggle from '../../components/ToggleShow/toggle';
import Adddog from '../../components/AddDogForm/addDogForm';
import { user } from '../../utils/API';
import { Link } from 'react-router-dom';
import './style.css';



export default (props) => {
	return (
		<div className='background'>
			{console.log(props.dog)}
			<div className='card'>
					{/* <img className='card-img-top' alt='Dog Profile Image'></img> */}
					<div className='card-body'>
						<h2 className='card-title miniProfileFont'>{props.user.name}</h2>
						<p className='card-text miniProfileFontSmall'>{props.user.email}</p>
					</div>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'><button className='button' >
						<Toggle title='Add Dog'>
							<Adddog {...props}/>
						</Toggle></button></li>
						<li className='list-group-item'><button className='button'>Edit Dog Profile</button></li>
						<li className='list-group-item'><Link to ='/dogprofiles'><button className='form button'>Dog Profile</button></Link></li>
					</ul> 
					
				</div>

		</div>
	)
};

