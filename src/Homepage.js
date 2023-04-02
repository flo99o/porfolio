import "./styles/homepage.css";
import princess from "./assets/princess.jpg";
import { Card } from "./components/Card";
import {
  cardDeveloperList,
  cardProductList,
  cardProjectIaList,
} from "./components/data/data";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFileRichtext } from "react-icons/bs";
import Typewriter from "typewriter-effect";

export const Homepage = () => {
  return (
    <div className="homepage_container">
      <div className="white_head"></div>
      <div className="header_container">
        <div className="img_container">
          <img className="img_profil" src={princess} alt="" />
        </div>
        <div className="info_container">
          <h3>I'm</h3>
          <h1 className="name_portefolio">Florence Alonzeau</h1>
          <Typewriter
            className="titleJobs"
            options={{
              strings: [
                "Product Owner",
                "Développeur Web",
                "Développeur Mobile",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="doc_container">
            <a href="/" className="doc_link">
              <BsFileRichtext />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/florence-alonzeau-732b3b193"
              className="doc_link"
            >
              <AiFillLinkedin />
              Linkedin
            </a>
            <a href="https://github.com/flo99o" className="doc_link">
              <AiOutlineGithub />
              Github
            </a>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Mes Projets</h1>
      <p>
        En tant que Product Owner / Developer avec une expérience dans le //
        développement de logiciels et une forte concentration sur la création //
        de produits innovants. Tout au long de ma carrière, j'ai eu l'occasion
        de travailler sur divers projets de développement de logiciels, en //
        collaborant avec des équipes interfonctionnelles pour livrer de produits
        qui répondent aux besoins des clients.
      </p>
      <div className="project_container">
        <h2>Product Owner projects</h2>
        <div className="product_owner" style={{ display: "flex" }}>
          {cardProductList.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        <h2>Développeur web / Mobile</h2>
        <div className="devweb_mobile" style={{ display: "flex" }}>
          {cardDeveloperList.map((project) => (
            <Card key={project} project={project} />
          ))}
        </div>
        <h2>Projet IA</h2>
        <div className="projet_ia" style={{ display: "flex" }}>
          {cardProjectIaList.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        <div className="skills_container">
          <h1 className="skillsTitle">Skills</h1>
          <h1 className="miniSkillsTitle">My Skills</h1>
        </div>
      </div>
    </div>
  );
};

// En tant que Product Owner / Developer avec une expérience dans le
//           développement de logiciels et une forte concentration sur la création
//           de produits innovants. Tout au long de ma carrière, j'ai eu l'occasion
//           de travailler sur divers projets de développement de logiciels, en
//           collaborant avec des équipes interfonctionnelles pour livrer des
//           produits qui répondent aux besoins des clients.
