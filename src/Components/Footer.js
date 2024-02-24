import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="main">
      <div className="linb">
        <div className="listofit">
          <Link to="/" className="foo">
            Home
          </Link>
          <Link to="/about" className="foo">
            About us
          </Link>
          <Link to="/projects" className="foo">
            Projects
          </Link>
        </div>
      </div>
      <div className="linb">
        <div className="listofit">
          <Link
            to="https://www.linkedin.com/in/manoj-kumar-talluri-a26102188/"
            className="icon"
          >
            <BsLinkedin size={20} />
          </Link>
          <Link
            to="https://github.com/manojtalluri12?tab=repositories"
            className="icon"
          >
            <BsGithub size={20} />
          </Link>
          <Link to="https://www.instagram.com/manoj_13579_/" className="icon">
            <BsInstagram size={20} />
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCmxSNsi-qybHqkOFly_cLeg"
            className="icon"
          >
            <BsYoutube size={20} />
          </Link>
        </div>
      </div>
      <div className="nameswith">
        <p className="popo">
          Copyright ©2023 - 2030 Manojkumar Talluri, Inc. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
