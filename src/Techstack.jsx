import translations from "./translations.jsx";

const techstack = [
  {
    id: 1,
    category: "Languages",
    icon: "{ }",
    items: ["Java", "Python", "SQL", "C#", "JavaScript", "PHP"],
  },
  {
    id: 2,
    category: "Frameworks & Libraries",
    icon: "⬡",
    items: [
      "Spring Boot",
      "Tkinter",
      "React",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    id: 3,
    category: "Databases",
    icon: "◫",
    items: ["MySQL", "PostgreSQL", "Microsoft SQL Server", "MongoDB"],
  },
  {
    id: 4,
    category: "Tools",
    icon: "⚙",
    items: ["Git", "Excel"],
  },
  {
    id: 5,
    category: "Editing",
    icon: "◈",
    items: ["Photoshop", "Premiere Pro", "After Effects", "Media Encoder"],
  },
];

function Techstack({ lang }) {
  const t = translations[lang].techstack;

  return (
    <section id="techstack">
      <h2 className="section-title" style={{ textDecoration: "underline" }}>
        {t.heading}
      </h2>
      <div className="tech-grid">
        {techstack.map((tech) => (
          <div className="tech-card" key={tech.id}>
            <div className="tech-card-header">
              <span className="tech-icon">{tech.icon}</span>
              <h3 className="tech-category">{t.categories[tech.category]}</h3>
            </div>
            <div className="tech-items">
              {tech.items.map((item, i) => (
                <span className="tech-tag" key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techstack;
