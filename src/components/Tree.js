import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

let angle;

const Sketch = p5 => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4;
    p5.stroke('#020659');
  };

  p5.draw = () => {
    p5.clear();
    // p5.background(51);
    p5.translate(200, p5.height);
    angle = p5.map(p5.cos(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16);

    branch(100);
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();

      p5.rotate(-angle);
      branch(len * 0.67);
    }
  }
};

const Tree = () => (
  <div className="tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);
  
export default Tree;