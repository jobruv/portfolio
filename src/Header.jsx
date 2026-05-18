import translations from "./translations.jsx";

function Header({ lang, setLang }) {
  const t = translations[lang].header;

  const handleCvDownload = () => {
    const file = `${import.meta.env.BASE_URL}${lang === "tr" ? "cv-tr.pdf" : "cv-en.pdf"}`;
    const link = document.createElement("a");
    link.href = file;
    link.download = lang === "tr" ? "cv-tr.pdf" : "cv-en.pdf";
    link.click();
  };

  return (
    <header>
      <h1>Jobruv / Serena</h1>
      <nav>
        <ul>
          <li>
            <a href="#">{t.about}</a>
          </li>
          <li>
            <a href="#certificates">{t.certificates}</a>
          </li>
          <li>
            <a href="#project">{t.projects}</a>
          </li>
          <li>
            <button onClick={handleCvDownload}>{t.downloadCv}</button>
          </li>
          <li>
            <button onClick={() => setLang(lang === "en" ? "tr" : "en")}>
              {lang === "en" ? "Türkçe" : "English"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
