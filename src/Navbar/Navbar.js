import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiCrossedBones } from "react-icons/gi";
import { RiMenuSearchFill } from "react-icons/ri";
const Navbar = () => {
  const [correct, setcorrect] = useState(false);
  const navhandle = () => {
    setcorrect(!correct);
  };
  const handleHome=()=>{
    setcorrect(!correct);
  }
  return (
    <div className="navbar">
      <Link to="/" className="phaseone">
        Portfolio
      </Link>
      <div className="icons">
        {correct ? (
          <GiCrossedBones size={20} onClick={navhandle} />
        ) : (
          <RiMenuSearchFill size={20} onClick={navhandle} />
        )}
      </div>
      <div className={correct ? "phasetwo" : "manoj"}>
        <Link to="/" className="li">
          Home
        </Link>
        <Link to="/projects" className="li" onClick={handleHome}>
          Projects
        </Link>
        <Link to="/about" className="li" onClick={handleHome}>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
