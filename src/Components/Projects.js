import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbLiveView } from "react-icons/tb";
import "./home.css";
import Footer from "./Footer";
const Projects = () => {
  const country = [
    {
      name: "ALL",
    },
    {
      name: "react",
    },
    {
      name: "javascript",
    },
  ];
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
      pro: "react",
    },
    {
      id: "kbkibsd9",
      name: "Food order",
      image:
        "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
      html: "Html",
      css: "Css",
      react: "React js",
      js: "Javascript",
      links: "https://restaurant-manoj.netlify.app/",
      pro: "react",
    },
    {
      id: "khhbkd9",
      name: "Authentication",
      image:
        "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600",
      html: "Html",
      css: "Css",
      react: "React js",
      js: "Javascript",
      links: "https://manojtalluri.netlify.app/",
      pro: "react",
    },
    {
      id: "oookd9",
      name: "My first projects",
      image:
        "https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&w=600",
      html: "Html",
      css: "Css",
      js: "Javascript",
      links: "https://manoj-ceo-site.netlify.app/",
      pro: "javascript",
    },
    {
      id: "d09",
      name: "My Portfolio ",
      image: "https://manoj-ceo-site.netlify.app/MNJ.jpeg",
      html: "Html",
      css: "Css",
      react: "React js",
      js: "Javascript",
      links: "https://manojkumar-talluri.netlify.app/",
      pro: "react",
    },
    {
      id: "d09",
      name: "Count Numbers ",
      image:
        "https://images.pexels.com/photos/1329292/pexels-photo-1329292.jpeg?auto=compress&cs=tinysrgb&w=600",
      html: "Html",
      css: "Css",
      react: "React js",
      js: "Javascript",
      links: "https://countnumbersin.netlify.app/",
      pro: "react",
    },
  ];
  const [selecst, setelect] = useState("ALL");
  const [places, setplaces] = useState(list);
  useEffect(() => {
    const fill = list.filter((eachitem) => {
      if (selecst === "react") {
        return eachitem.pro === selecst;
      } else if (selecst === "javascript") {
        return eachitem.pro === selecst;
      } else {
        return eachitem;
      }
    });
    setplaces(fill);
    console.log(fill);
  }, [selecst]);
  return (
    <div className="eee">
      <div className="divison">
        <div className="proleft">
          <h1 className="proheader">Projects</h1>
          <p className="proshoter"></p>
        </div>
        <p className="please">Filter By Technology</p>
        <div className="option">
          <select onChange={(e) => setelect(e.target.value)} className="select">
            {country.map((ctr) => {
              const { name } = ctr;
              return <option>{name}</option>;
            })}
          </select>
        </div>
      </div>

      <div>
        <div className="dis">
          <h3 className="oo"> Showing {places.length} projects</h3>
          <hr />
        </div>
      </div>
      <div className="datas">
        <div className="proright">
          {places.map((echitem) => {
            const { id, name, image, html, css, js, react, links } = echitem;
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
