import Card from "./Card.jsx";
import translations from "./translations.jsx";
import sketch from "./assets/sketch.webp";
import fearofai from "./assets/projects/fearofai.webp";
import honeysource from "./assets/projects/honeysource.webp";
import kolektif from "./assets/projects/kolektif.webp";

function Project({ lang }) {
  const t = translations[lang].projects;

  return (
    <div id="project">
      <Card
        lang={lang}
        imgUrl={sketch}
        title={t.portfolio.title}
        text={t.portfolio.text}
        isOpenSource={true}
        link="https://github.com/jobruv/portfolio"
      />
      <Card
        lang={lang}
        imgUrl={kolektif}
        title={t.kolektif.title}
        text={t.kolektif.text}
        isOpenSource={true}
        link="https://github.com/jobruv/kolektif-saglik-sistemi"
      />
      <Card
        lang={lang}
        imgUrl={fearofai}
        title={t.fearofai.title}
        text={t.fearofai.text}
        isOpenSource={true}
        link="https://github.com/jobruv/StudentAnxietyOnAI"
      />
      <Card
        lang={lang}
        imgUrl={honeysource}
        title={t.honeysource.title}
        text={t.honeysource.text}
        isOpenSource={true}
        link="https://github.com/jobruv/bal-kaynak-sistemi"
      />
    </div>
  );
}

export default Project;
