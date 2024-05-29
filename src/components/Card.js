import "../styles/card.css";

export const Card = ({ project }) => {
  console.log("yo", project);

  return (
    <div className="card_container">
      <a href={project.lien} className="item" target="_blank" rel="noreferrer">
        <img src={project.img} alt="podcast" className="img_card" />
      </a>
    </div>
  );
};
