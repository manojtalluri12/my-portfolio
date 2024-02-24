import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="skils">
      <div className="oneskills">
        <div className="firstone">
          <div className="heads">
            <h1 className="heads">Web Technologies</h1>
          </div>
          <div className="flexit">
            <p className="flev">HTML</p>
            <p className="flev">CSS</p>
            <p className="flev">boostrap</p>
            <p className="flev">Javascript</p>
            <p className="flev">ReactJS</p>
            <p className="flev">Redux</p>
          </div>
        </div>
        <div className="secondone">
          <div className="heads">
            <h1 className="heads">Programming</h1>
          </div>
          <div className="flexit">
            <p className="flev">Java</p>
            <p className="flev">Python</p>
            <p className="flev">C programming</p>
            <p className="flev">Data Structures and Alogrithms</p>
          </div>
        </div>
        <div className="thirdone">
          <div className="heads">
            <h1 className="heads">Backend Technologies</h1>
          </div>
          <div className="flexit">
            <p className="flev">Java</p>
            <p className="flev">JDBC</p>
            <p className="flev">Spring Framework</p>
            <p className="flev">Spring Boot</p>
            <p className="flev">SQL</p>
            <p className="flev">NodeJs</p>
            <p className="flev">Express Js</p>
            <p className="flev">MYSQL</p>
            <p className="flev">MangoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
