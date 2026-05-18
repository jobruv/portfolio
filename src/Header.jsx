function Header({ lang, setLang }) {
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
            <a href="#">About</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <button onClick={handleCvDownload}>Download CV</button>
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
