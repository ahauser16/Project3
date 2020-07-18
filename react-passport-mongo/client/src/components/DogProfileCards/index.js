import React from 'react';
import style from './style.css';

function DogProfileCards(props) {
	return (
		<div className='card'>
            {console.log(props.user.dogname)}
            {console.log(props.user.dogname[0])}
            {console.log(props.user.dogname[0].dogname)}
            {console.log(props.user.dogname[0].breed)}
			<div className = 'card_left fill'>
				<img src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03173132/Australian-Shepherd.1.jpg'></img>
				<div className='card_right'>
					<h1>Max</h1>
					<div className='card_right__details'>
						<ul>
							<li>Breed</li>
							<li>Age</li>
							<li>Gender</li>
							<li>Weight</li>
						</ul>
						{/* <!-- <div className="container">
                <div className="slider">
                    <input type="range" min="0" max="100" onchange="rangevalue.value=value" />
                    <output id="rangevalue">50</output>
                </div> --> */}
					</div>
					<div className='card_right__review'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
							eros maximus, feugiat tortor non, rutrum augue. In magna nibh,
							aliquet eu lorem cursus, lobortis maximus metus. Mauris euismod
							lobortis mauris, ut viverra purus hendrerit ac. Sed porta odio in
							magna eleifend, quis fermentum nunc scelerisque.
						</p>
					</div>
					<div className='card_right__button'>
						{/* <i className='fas fa-paw' style="color:#f3c623;"></i> */}
						<a href='' target='_blank'>
							Go on a Walk
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DogProfileCards;
