import Card from "./Card.jsx";
import translations from "./translations.jsx";

function Project({ lang }) {
  const t = translations[lang].projects;

  return (
    <div id="project">
      <Card
        lang={lang}
        imgUrl="src/assets/sketch.webp"
        title={t.portfolio.title}
        text={t.portfolio.text}
        isOpenSource={true}
        link="https://github.com/jobruv/portfolio"
      />
      <Card
        lang={lang}
        imgUrl="src/assets/projects/kolektif.webp"
        title={t.kolektif.title}
        text={t.kolektif.text}
        isOpenSource={true}
        link="https://github.com/jobruv/kolektif-saglik-sistemi"
      />
      <Card
        lang={lang}
        imgUrl="src/assets/projects/fearofai.webp"
        title={t.fearofai.title}
        text={t.fearofai.text}
        isOpenSource={true}
        link="https://github.com/jobruv/StudentAnxietyOnAI"
      />
      <Card
        lang={lang}
        imgUrl="src/assets/projects/honeysource.webp"
        title={t.honeysource.title}
        text={t.honeysource.text}
        isOpenSource={true}
        link="https://github.com/jobruv/bal-kaynak-sistemi"
      />
    </div>
  );
}

export default Project;
