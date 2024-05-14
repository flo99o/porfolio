import "./styles/homepage.css";
import profilpic from "./assets/profilpic.jpg";
import { Card } from "./components/Card";
import {
  cardDeveloperList,
  cardProductList,
  // cardProjectIaList,
} from "./components/data/data";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFileRichtext } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { BiPodcast } from "react-icons/bi";
import { SiFigma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { MdOutlineWhatsapp } from "react-icons/md";
import Typewriter from "typewriter-effect";
import FileSaver from "file-saver";

export const Homepage = () => {
  const onSave = () => {
    FileSaver.saveAs("/cvdevopsen.pdf", "cv.png");
  };
  return (
    <div className="homepage_container">
      <div className="white_head"></div>
      <div className="header_container">
        <div className="img_container">
          <img className="img_profil" src={profilpic} alt="" />
        </div>
        <div className="info_container">
          <h3>I'm</h3>
          <h1 className="name_portefolio">Florence Alonzeau</h1>
          <Typewriter
            className="titleJobs"
            options={{
              strings: [
                "Devops Engineer",
                "Software Developper",
                "Product Owner",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="doc_container">
            <a
              onClick={onSave}
              className="doc_link"
              download
              style={{ cursor: "pointer" }}
            >
              <BsFileRichtext />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/florence-alonzeau-732b3b193"
              className="doc_link"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
              Linkedin
            </a>
            <a
              href="https://github.com/flo99o"
              className="doc_link"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub />
              Github
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=%2B33698338009&text&app_absent=0"
              className="doc_whatsapp"
            >
              <MdOutlineWhatsapp />
              Whatsapp
            </a>
          </div>
        </div>
      </div>
      <div className="project_title_container">
        <h1 className="my_project">Projets</h1>
        <h1 className="minimy_project"> PROJETS</h1>
      </div>

      <p>
        Diplômée d'Epitech en tant qu'architecte logiciel, je possède une solide
        expérience en tant que développeur web, Technical Product Owner et
        DevOps. Mon parcours académique et professionnel m'a permis de
        développer une expertise approfondie dans la conception et la mise en
        œuvre de solutions logicielles robustes et innovantes. Fort de plusieurs
        années d'expérience, j'ai eu l'opportunité de travailler sur divers
        projets complexes, allant de la création de sites web performants à la
        gestion de produits techniques sophistiqués. 
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
        {/* <h2>Projet IA</h2>
        <div className="projet_ia" style={{ display: "flex" }}>
          {cardProjectIaList.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div> */}
        <div className="skills_container">
          <h1 className="skillsTitle">Skills</h1>
          <h1 className="miniSkillsTitle">SKILLS</h1>
        </div>
        <div className="icons_container">
          <SiJavascript size={60} />
          <SiCss3 size={60} />
          <p>ZenHub</p>
          <TbBrandKotlin size={60} />
          <GrReactjs size={60} />
          <FaPython size={60} />
          <SiMicrosoftoffice size={60} />
          <BiPodcast size={60} />
          <SiFigma size={60} />
          <FaGit size={60} />
          <FaGithub size={60} />
          <SiNestjs size={60} />
        </div>
      </div>
    </div>
  );
};
