import React, {Component} from 'react';
import {dog as dogAPI} from '../../utils/API';
// import ImageUploader from "react-images-upload";



export default class Adddog extends Component {
    constructor(props) {
        super(props);
        this.onChangeDogname = this.onChangeDogname.bind(this);
        this.onChangeBreed = this.onChangeBreed.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            dogname: '',
            breed: '',
            sex: '',
            weight: '',
            picture: '',
            description: ''
        }
    }

    componentDidMount() {
        // dogAPI.getDogs().then(response => { console.log(response)}) 
        //   .catch((error) => {
        //     console.log(error);
        //   })
    
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
    onChangePicture(e) {
        this.setState({picture: e.target.value})
    }
    onChangeDescription(e) {
        this.setState({description: e.target.value})
    };

    onSubmit(e) {
        e.preventDefault();
        
        dogAPI.create({
            dogname: this.state.dogname,
            breed: this.state.breed,
            sex: this.state.sex,
            weight: this.state.weight,
            picture: this.state.picture,
            description: this.state.description
        })

        .then(res => {
            if (res.status === 200) {
                console.log(res.status);
                this.props.setDog(res.data);
                this.props.setUser(res.data);
                console.log(res.data.dogname.picture);
            }
        })
        .catch(err => {
            console.warn(err.response.data); 
        });
        
        // fetch('/dogs/add', {
        //     method:'POST',
        //     headers: {
        //     "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(dog)
        //     })

        // axios.post('/dogs/add', dog).then(res => console.log(res.data + 'Dog Added'));
    };
    // imagesPreview= () => {(input, placeToInsertImagePreview) {
    //     if (input.files) {
    //       let filesAmount = input.files.length;
    //       for (i = 0; i < filesAmount; i++) {
    //         let reader = new FileReader();
    //         reader.onload = function(event) {
    //           $($.parseHTML("<img>"))
    //             .attr("src", event.target.result)
    //             .appendTo(placeToInsertImagePreview);
    //         };
    //         reader.readAsDataURL(input.files[i]);
    //       }
    //     }
    //   };
    //   $("#input-files").on("change", function() {
    //     imagesPreview(this, "div.preview-images");
    //   });
    // }



    render() {
        return (
            <div>
                <form 
                    onSubmit={this.onSubmit}
                    action='/dogProfile'
                    method='post'
                    encType="multipart/form-data">
                    <label> Name:
                    <input 
                        type='text' 
                        className='form-control'
                        value={this.state.dogname}
                        onChange={this.onChangeDogname}
                        />
                    </label>
                    <label> Breed:
                        <input 
                        type='text'
                        className='form-control'
                        value={this.state.breed}
                        onChange={this.onChangeBreed}
                        />
                    </label>
                    <label> Sex:
                        <input 
                        type='text'
                        className='form-control'
                        value={this.state.sex}
                        onChange={this.onChangeSex}
                        />
                    </label>
                    <label> Weight: 
                        <input 
                        type='text'
                        className='form-control'
                        value={this.state.weight}
                        onChange={this.onChangeWeight}
                        />
                    </label>
                    {/* <label> Upload Image: 
                        <input 
                        type='file'
                        name='picture'
                        className='form-control'
                        id='picture'
                        value={this.state.picture}
                        onChange={this.onChangePicture}
                        />
                    </label> */}
                    <label> Description:
                        <input 
                        type='text' 
                        className='form-control'
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </label>
                    {/* input for image */}
                    <input type='submit' value='Add Dog' className='btn btn-success'/>
                </form>
            </div>
        )
    }
}

