import "../styles/card.css";

export const Card = ({ project }) => {
  console.log("yo", project);

  return (
    <div className="container">
      <a href={project.lien} className="item" target="_blank">
        <img src={project.img} alt="podcast" className="img_card" />
      </a>
    </div>
  );
};
