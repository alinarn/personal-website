import React from "react";
import { ReactTyped } from 'react-typed';

function Intro() {
    return (
    <div className="intro">
      <h1 className="typed-text"> 
        hi, {" "}
        <ReactTyped
          strings={["I'm Alina"]}
          typeSpeed={150}/>
       </h1>
     <h4 className="subheader">currently building software in New York</h4>
    </div>
    )
}

export default Intro;