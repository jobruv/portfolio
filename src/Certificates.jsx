const certificates = [
  {
    title: "Green Software Practitioner",
    issuer: "Green Software Foundation",
    date: "May 2026",
  },
  {
    title: "Java & Spring Boot Masterclass Training IATELS & ICCW Certificate",
    issuer: "Berk Academy",
    date: "March 2026",
  },
  {
    title: "HacknRota Hackathon Participation",
    issuer: "Izmir Fikir Sanat Rotary Club",
    date: "December 2025",
  },
  {
    title: "Participation as Speaker in ITK Talks",
    issuer: "İzmir Özel Türk Koleji",
    date: "December 2019",
  },
  {
    title: "5th IEU MUN Training Conference",
    issuer: "Izmir University of Economics",
    date: "2018",
  },
  {
    title: "TEMA Foundation Membership",
    issuer: "TEMA Foundation",
    date: "2018",
  },
  {
    title: "Ataşehir Fenerbahçe Volleyball School",
    issuer: "Ataşehir Fenerbahçe",
    date: "2016-2017",
  },
];

function Certificates() {
  return (
    <section id="certificates">
      <h2
        style={{
          textDecoration: "underline",
        }}
      >
        Certificates & Achievements
      </h2>
      <p
        style={{
          color: "rgba(240, 248, 255, 0.75)",
          lineHeight: "1.7",
          fontSize: "0.9rem",
          textAlign: "center",
        }}
      >
        i like to educate myself and learn new things whether its certificated
        or not
      </p>
      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <div className="cert-card" key={i}>
            <span className="cert-date">{cert.date}</span>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
