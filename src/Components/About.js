import React, { useState } from "react";
import "./about.css";
import Footer from "./Footer";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Skills from "./Skills";
import Edu from "./Edu";
import Conn from "./Conn";
const Most = () => {
  return (
    <div className="Aboutsuspage">
      <div className="oneofside">
        <h2 className="colors">My name is</h2>
        <h1 className="col">Manojkumar Talluri</h1>
        <div className="firstthing">
          Hi There, I'm Manoj and I am Mern full stack developer. It's been 14
          months, I have developed many website and also sharing my knowledge to
          college students. I'm also learning Back-End Development and looking
          forward to be a Full Stack Mern Developer
        </div>
        <a href="reume.pdf" download="reume.pdf" className="myresume">
          My Resume
        </a>
      </div>
      <div className="twoofside">
        <img
          src="https://manoj-ceo-site.netlify.app/MNJ.jpeg"
          alt="jszbjakv"
          className="manojpics"
        />
      </div>
    </div>
  );
};
const Experience = () => {
  const data = [
    {
      id: 1,
      company: "Dxc technology",
      Designation: "Analyst II software engineer at DXC Technology",
      Time: "10 Months Present",
      step1:
        "Create a user interface specification of application in an Agile environment.",
      step2:
        "Implemented end to end UI design to provide user friendly websites for the company and it’s clients.",
      step3:
        "Worked on Web Push Notifications for pregressive web apps using React, Nodejs, Express, MongoDB.",
      step4:
        "Implemented before and after slider using ReactJS with Functional Components - Hooks",
    },
    {
      id: 2,
      company: "Revature",
      Designation: "Full stack Java developer",
      Time: "April 2022 TO September 2022",
      step1:
        "Design, develop and test HTML, CSS3, JavaScript and React.JS that meets accessibility and web browser standards for website.",
      step2:
        "Used React-Router to turn an application into a Single Page Application.",
      step3: "Working spring and springboot framework",
      step4:
        "Restful web services calls for POST, PUT, DELETE and GET methods.",
    },
  ];
  const [slider, setslider] = useState(data[0]);
  const handleclick = (index) => {
    const slider = data[index];
    setslider(slider);
  };
  return (
    <div>
      <div className="proleft">
        <h1>Experience</h1>
        <p className="proshoter"></p>
      </div>
      <div className="Mainthing">
        <div className="onclicbut">
          {data.map((eachitem, i) => {
            return (
              <NavLink
                key={eachitem.id}
                onClick={() => handleclick(i)}
                className="durg"
              >
                {eachitem.company}
              </NavLink>
            );
          })}
        </div>
        <div className="indetail">
          <h1 className="inde">{slider.Designation}</h1>
          <p className="times">{slider.company}</p>
          <button className="times">{slider.Time}</button>
          <div className="misure">
            <p className="byod">
              {" "}
              <AiOutlineDoubleRight size={10} className="cop" /> {slider.step1}{" "}
            </p>
            <p className="byod">
              {" "}
              <AiOutlineDoubleRight size={10} className="cop" /> {slider.step2}{" "}
            </p>
            <p className="byod">
              {" "}
              <AiOutlineDoubleRight size={10} className="cop" /> {slider.step3}{" "}
            </p>
            <p className="byod">
              {" "}
              <AiOutlineDoubleRight size={10} className="cop" /> {slider.step4}{" "}
            </p>
          </div>

          <Link className="onontvchvj" to="/projects">
            More Info About Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
const Certification = () => {
  return (
    <div className="cer">
      <div className="proleft">
        <h1>Technical Skills</h1>
        <p className="proshoter"></p>
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
};
const Education = () => {
  return (
    <div className="cerf">
      <div className="proleft">
        <h1>Education</h1>
        <p className="proshoter"></p>
      </div>
      <div>
        <Edu />
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="ce">
      <div className="proleft">
        <h1>Contact Me</h1>
        <p className="proshoter"></p>
      </div>
      <div>
        <Conn />
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <Most />
      <Experience />
      <Certification />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
