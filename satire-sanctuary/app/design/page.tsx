"use client";

import "./styles/designBackground.css"; // Import the CSS file
import Wave from "./animations/designBackground";
import React from "react";
import StickFigure from "./animations/stickfigure";

export default function HomePage(){
  return(
    <div className="background">
      <div className="header">
      <h1>The Dough Zone</h1>
      </div>
      <div className="line">
        <Wave />
        <StickFigure />
      </div>
      <div className="firstLayer">
      </div>
      <div className="secondLayer">
      </div>
    </div>
  )
}





