import React, { useEffect, useState } from "react";
import "../styles/carousel.css";

export default function Banner() {
    return(
    <div className="animalPhotos">
        <div className="bear">
            <img src="images/bear.png" />
            </div>
        <div className="elephant">
            <img src="images/elephant.png" />
            </div>
        <div className="chimp">
            <img src="images/chimpanzee.png" />
        </div>
        <div className="turtle">
            <img src ="images/turtle.png" />
            </div>
        <div className="frog"></div>
            <img src="images/frog.png" />
        </div>
    )
}

