import React from "react";
import "./style.css";

function DogProfileCards(props) {
    return (
        <div class='card'>
            <div class='card_left fill'>
                <img src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03173132/Australian-Shepherd.1.jpg'></img>
            </div>
            <div class='card_right'>
                <h1>{props.user.dogname[0].dogname}</h1>
                <div class='card_right__details'>
                    <ul>
                        <li>{props.user.dogname[0].breed}</li>
                        <li>{props.user.dogname[0].age}</li>
                        <li>{props.user.dogname[0].sex}</li>
                        <li>{props.user.dogname[0].weight}</li>
                    </ul>
                    <div class="container">
                        <div class="slider">
                            <input type="range" min="0" max="100" onchange="rangevalue.value=value"/>
                            <output id="rangevalue">50</output>
                        </div>
                    </div>
                    <div class='card_right__review'>
                        <p>{props.user.dogname[0].description}</p>
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