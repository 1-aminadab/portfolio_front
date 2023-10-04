import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
function Skills() {
  return (
    <div className="skills" id="skill">
      <h1>Skills</h1>

      <div className="skill-list">
        <Tilt options={defaultOptions}>
          <div>
            <h1>Languages</h1>
            <ul>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>dart</li>
              <li>php</li>
            </ul>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div>
            <h1>
              Frameworks/ <br /> Library's
            </h1>
            <ul>
              <li>Rect js</li>
              <li>Next js</li>
              <li>Node js</li>
              <li>Redux</li>
              <li>Expres js</li>
              <li>Django</li>
              <li>Laravel</li>
              <li>PyQt</li>
              <li>OpenCv</li>
            </ul>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div>
            <h1>Database</h1>
            <ul>
              <li>Mondodb</li>
              <li>Mysql</li>
            </ul>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Skills;
