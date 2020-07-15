import React, {Component} from 'react';
import axios from 'axios';


export default class Adddog extends Component {
    constructor(props) {
        super(props);
        this.onChangeDogname = this.onChangeDogname.bind(this);
        this.onChangeBreed = this.onChangeBreed.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            dogname: 'pug',
            breed: '',
            sex: '',
            weight: '',
            description: ''
        }
    }

    componentDidMount() {
        axios.get('/dogs')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }

    onChangeDogname(e) {
        this.setState({dogname: e.target.value})
    };
    onChangeBreed(e) {
        this.setState({breed: e.target.value})
    };
    onChangeSex(e) {
        this.setState({sex: e.target.value})
    };
    onChangeWeight(e) {
        this.setState({weight: e.target.value})
    };
    onChangeDescription(e) {
        this.setState({description: e.target.value})
    };

    onSubmit(e) {
        e.preventDefault();
        
        const dog = {
            dogname: this.state.dogname,
            breed: this.state.breed,
            sex: this.state.sex,
            weight: this.state.weight,
            description: this.state.description
        }
        console.log(dog);
        
        fetch('/dogs/add', {
            method:'POST',
            headers: {
            "Content-Type":"application/json"
            },
            body: JSON.stringify(dog)
            })

        // axios.post('/dogs/add', dog).then(res => console.log(res.data + 'Dog Added'));
    }



    render() {
        console.log(this.state.dogname)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label> Name:
                    <input 
                        type='text' 
                        className='form-control'
                        value={this.state.dogname}
                        onChange={this.onChangeDogname}/>
                    </label>
                    <label> Breed:
                        <input 
                        type='text'
                        className='form-control'
                        value={this.state.breed}
                        onChange={this.onChangeBreed}/>
                    </label>
                    <label> Sex:
                        <input 
                        type='text'
                        className='form-control'
                        value={this.state.sex}
                        onChange={this.onChangeSex}/>
                    </label>
                    <label> Weight: 
                        <input 
                        type='text'
                        className='form-control'
                        value={this.state.weight}
                        onChange={this.onChangeWeight}/>
                    </label>
                    <label> Description:
                        <input 
                        type='text' 
                        className='form-control'
                        value={this.state.description}
                        onChange={this.onChangeDescription}/>
                    </label>
                    {/* input for image */}
                    <input type='submit' value='Add Dog' className='btn btn-success'/>
                </form>
            </div>
        )
    }
}

