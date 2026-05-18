import photo from "./assets/meandyou.webp";
import translations from "./translations.jsx";

function Intro({ lang }) {
  const t = translations[lang].intro;
  const email = "serenauzumcu@protonmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert(t.emailCopied);
    });
  };

  return (
    <div id="intro">
      <div id="intro-info">
        <h1>{t.title}</h1>
        <p id="intro-text">{t.bio}</p>
        <h3>{t.contactPrompt}</h3>
        <div id="intro-contact">
          <p>
            {t.github}:{" "}
            <a
              href="https://github.com/jobruv"
              target="_blank"
              rel="_noreferrer"
            >
              jobruv
            </a>
          </p>
          <p>
            {t.email}:{" "}
            <span id="copyEmail" onClick={handleCopy}>
              serenauzumcu [at] protonmail (dot) com
            </span>
          </p>
          <p>
            {t.linkedin}:{" "}
            <a
              href="https://www.linkedin.com/in/serena-%C3%BCz%C3%BCmc%C3%BC-b92382395/"
              target="_blank"
              rel="_noreferrer"
            >
              Serena Üzümcü
            </a>
          </p>
          <p style={{ textAlign: "right" }}>
            <i style={{ color: "grey" }}>{t.drawnBy}</i>
          </p>
        </div>
      </div>
      <div id="intro-img">
        <img src={photo} alt="profile" />
      </div>
    </div>
  );
}

export default Intro;
