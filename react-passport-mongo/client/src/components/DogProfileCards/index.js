import React from "react";
import "./style.css";

function DogProfileCards(props) {
    return (
        <div class='card'>
            <div class='card_left fill'>
                <img src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03173132/Australian-Shepherd.1.jpg'></img>
            </div>
            <div class='card_right'>
                <h1>Max</h1>
                <div class='card_right__details'>
                    <ul>
                        <li>Breed</li>
                        <li>Age</li>
                        <li>Gender</li>
                        <li>Weight</li>
                    </ul>
                    <div class="container">
                        <div class="slider">
                            <input type="range" min="0" max="100" onchange="rangevalue.value=value"/>
                            <output id="rangevalue">50</output>
                        </div>
                    </div>
                    <div class='card_right__review'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eros maximus, feugiat tortor non, rutrum augue. In magna nibh, aliquet eu lorem cursus, lobortis maximus metus. Mauris euismod lobortis mauris, ut viverra purus hendrerit ac. Sed porta odio in magna eleifend, quis fermentum nunc scelerisque.</p>
                    </div>
                    <div class='card_right__button'>
                        <i class='fas fa-paw' style="color:#f3c623;"></i>
                        <a href='' target='_blank'>Go on a Walk</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DogProfileCards;