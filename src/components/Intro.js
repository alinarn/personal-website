import React from "react";
import { ReactTyped } from 'react-typed';

function Intro() {
    return (
    <div className="intro">
        <h1> 
        hi, {" "}
        <ReactTyped
          strings={["I'm Alina"]}
          typeSpeed={150}/>
     </h1>
     <h4>currently building software in New York</h4>
    </div>
    )
}

export default Intro;