import translations from "./translations.jsx";

function Card({ imgUrl, title, text, isOpenSource, link, lang }) {
  const t = translations[lang].projects;
  const statusStyle = {
    backgroundColor: isOpenSource ? "green" : "red",
  };
  return (
    <div className="card">
      <img className="card-image" alt="project preview" src={imgUrl} />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <p className="card-source" style={statusStyle}>
        {isOpenSource ? t.openSource : t.closedSource}
      </p>
      <a href={link} target="_blank" rel="_noreferrer">
        <button className="card-button">{t.learnMore}</button>
      </a>
    </div>
  );
}

export default Card;
