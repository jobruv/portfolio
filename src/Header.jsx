import translations from "./translations.jsx";

function Header({ lang, setLang }) {
  const t = translations[lang].header;

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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
