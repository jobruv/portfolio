import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Project from "./Project.jsx";
import Intro from "./Intro.jsx";
import Techstack from "./Techstack.jsx";
import Certificates from "./Certificates.jsx";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Intro lang={lang} />
      <Certificates lang={lang} />
      <Techstack lang={lang} />
      <Project lang={lang} />
      <Footer />
    </>
  );
}

export default App;
