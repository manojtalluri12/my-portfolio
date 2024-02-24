import React from "react";
import { TbLiveView } from "react-icons/tb";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
//import ganesh from ;
const list = [
  {
    id: "bxabbx",
    name: "Favourite Hotel",
    image:
      "https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=600",
    html: "Html",
    css: "Css",
    react: "React js",
    js: "Javascript",
    links: "https://hotelfav.netlify.app/",
  },
  {
    id: "kbkibsd9",
    name: "Food order",
    image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    html: "Html",
    css: "Css",
    react: "React js",
    js: "Javascript",
    links: "https://restaurant-manoj.netlify.app/",
  },
  {
    id: "kbkd9",
    name: "Authentication",
    image:
      "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600",
    html: "Html",
    css: "Css",
    react: "React js",
    js: "Javascript",
    links: "https://manojtalluri.netlify.app/",
  },
];
const Home = () => {
  return (
    <div className="Header">
      <div className="Pages">
        <div className="beforeit">
          <h1 className="inko">I'm Manoj</h1>
          <h3 className="in">Analyst II software engineer at DXC Technology</h3>
          <div className="onels">
            <Link
              to="https://www.linkedin.com/in/manoj-kumar-talluri-a26102188/"
              className="opo"
            >
              <BsLinkedin size={20} />
            </Link>
            <Link
              to="https://github.com/manojtalluri12?tab=repositories"
              className="opo"
            >
              <BsGithub size={20} />
            </Link>
            <Link to="https://www.instagram.com/manoj_13579_/" className="opo">
              <BsInstagram size={20} />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCmxSNsi-qybHqkOFly_cLeg"
              className="opo"
            >
              <BsYoutube size={20} />
            </Link>
          </div>
          <Link to="/about" className="iv">
            More About Manoj
          </Link>
        </div>
        <div className="afterit">
          <img
            src="https://manoj-ceo-site.netlify.app/MNJ.jpeg"
            alt="bjbvkjb"
            className="pic"
          />
        </div>
      </div>
    </div>
  );
};
const FeatutreProjects = () => {
  return (
    <div className="Pro">
      <div className="proleft">
        <h1 className="proheader">Featured Projects</h1>
        <p className="proshoter"></p>
      </div>
      <div className="proright">
        {list.map((eachitem) => {
          const { id, name, image, html, css, js, react, links } = eachitem;
          return (
            <div className="overall">
              <div className="mutiple">
                <div className="insideit" key={id}>
                  <div>
                    <img src={image} alt="ajbja" className="pictures" />
                  </div>
                  <p className="peru">{name}</p>
                  <div className="lib">
                    <p className="size">{html}</p>
                    <p className="size">{css}</p>
                    <p className="size">{react}</p>
                    <p className="size">{js}</p>
                  </div>
                  <div className="okrey">
                    <Link to={links} className="live">
                      Live Project <TbLiveView />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="backpro">
        <Link to="/projects" className="liv">
          All Projects
        </Link>
      </div>
    </div>
  );
};
const Main = () => {
  return (
    <div>
      <Home />
      <FeatutreProjects />
      <Footer />
    </div>
  );
};

export default Main;
