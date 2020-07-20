import React from 'react';
import { user } from '../../utils/API';
import {dog as dogAPI} from '../../utils/API';
import Select from 'react-select';
// import './style.css';



export default class Edit extends React.Component{
    constructor(props){
        super(props); 
        console.log(props)
        this.state = { dogList: [] }
    }
    
    getDogs

    getList = () => {
        this.setState({dogList: (this.props.user.dogname.dogname).map()})
    }

    render(){        
    
	return (
		<div className='background'>
			{console.log(user.dogList)}
			<div className='card'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4'></div>
						<div className='col-md-4'>
                            <h2>Which Dog would you like to edit?</h2>
                            <br/>
                            <Select
                            options={this.state.dogList} 
                            />
						</div>
						<div className='col-md-4'></div>
					</div>
				</div>

				{/* <ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<button className='button'>
							<Toggle title='Add Dog'>
								<Adddog {...props} />
							</Toggle>
						</button>
					</li>
					<li className='list-group-item'>
						<Link to='/editDog'>
							<button className='button'>Edit Dog Profile</button>
						</Link>
					</li>
					<li className='list-group-item'>
						<Link to='/dogprofiles'>
							<button className='form button'>Dog Profile</button>
						</Link>
					</li>
				</ul> */}
			</div>
		</div>
    );
            }
};
