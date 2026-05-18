const translations = {
  en: {
    header: {
      about: "About",
      certificates: "Certificates",
      projects: "Projects",
      downloadCv: "Download CV",
    },
    intro: {
      title: "Computer Programming Student",
      bio: (
        <>
          I am a computer programmer with a focus on{" "}
          <b>
            <i>backend technologies and data analytics</i>
          </b>
          . Outside of coding, I spend a lot of my time learning about
          astrophysics, how new technologies impact our world, or working on
          video editing. I am also a big fan of movies, video games and shows
          which is where I find a lot of my inspiration.
        </>
      ),
      contactPrompt: (
        <>
          Interested in these topics and my work?{" "}
          <u>Feel free to contact me.</u>
        </>
      ),
      github: "GitHub",
      email: "Email",
      linkedin: "LinkedIn",
      emailCopied: "Email copied to clipboard",
      drawnBy: "drawn by @delfin.doodles",
    },
    certificates: {
      heading: "Certificates & Achievements",
      subtext:
        "i like to educate myself and learn new things whether its certificated or not",
    },
    techstack: {
      heading: "Tech Stack",
      categories: {
        Languages: "Languages",
        "Frameworks & Libraries": "Frameworks & Libraries",
        Databases: "Databases",
        Tools: "Tools",
        Editing: "Editing",
      },
    },
    projects: {
      portfolio: {
        title: "This Portfolio Website",
        text: "Basically what you are viewing right now. I used React library and some dev tools to help with visualization. Check out my Github README for tools.",
      },
      kolektif: {
        title: "Collective Health System",
        text: "Our project, implemented using Javascript and Java Spring Boot, offers a web solution to provide access to healthy food for financially disadvantaged groups.",
      },
      fearofai: {
        title:
          "AI Dependency, Career Anxiety and Student Burnout Data Analysis",
        text: "Did some simple data analysis based on the given Kaggle dataset",
      },
      honeysource: {
        title: "Honey Source System",
        text: "Login and registration system for consumers to see the characteristics of honey and information about beekeepers. Implemented using Python Tkinter and connected to a MySQL database.",
      },
      openSource: "Open Source",
      closedSource: "Closed Source",
      learnMore: "Learn More",
    },
  },
  tr: {
    header: {
      about: "Hakkımda",
      certificates: "Sertifikalar",
      projects: "Projeler",
      downloadCv: "CV İndir",
    },
    intro: {
      title: "Bilgisayar Programcılığı Öğrencisi",
      bio: (
        <>
          Ben, ağırlıklı olarak{" "}
          <b>
            <i>backend teknolojileri ve veri analitiği</i>
          </b>{" "}
          alanlarına odaklanan bir bilgisayar programcısıyım. Kodlamanın dışında
          zamanımın büyük bir kısmını astrofizik öğrenerek, yeni teknolojilerin
          dünyamıza etkilerini araştırarak ya da video düzenleme üzerine
          çalışarak geçiriyorum. Aynı zamanda filmler, video oyunları ve
          dizilerin büyük bir hayranıyım; ilhamımın çoğunu buradan alıyorum.
        </>
      ),
      contactPrompt: (
        <>
          Bu konularla ve çalışmalarımla ilgileniyor musun?{" "}
          <u>Benimle iletişime geçmekten çekinme.</u>
        </>
      ),
      github: "GitHub",
      email: "E-posta",
      linkedin: "LinkedIn",
      emailCopied: "E-posta panoya kopyalandı",
      drawnBy: "@delfin.doodles tarafından çizildi",
    },
    certificates: {
      heading: "Sertifikalar & Başarılar",
      subtext:
        "sertifikalı olsun ya da olmasın kendimi eğitmeyi ve yeni şeyler öğrenmeyi seviyorum",
    },
    techstack: {
      heading: "Teknoloji Yığını",
      categories: {
        Languages: "Diller",
        "Frameworks & Libraries": "Framework'ler & Kütüphaneler",
        Databases: "Veritabanları",
        Tools: "Araçlar",
        Editing: "Düzenleme",
      },
    },
    projects: {
      portfolio: {
        title: "Bu Portfolyo Sitesi",
        text: "Şu an baktığınız şey bu. React kütüphanesi ve bazı geliştirici araçları kullandım. Araçlar için Github README'me göz at.",
      },
      kolektif: {
        title: "Kolektif Sağlık Sistemi",
        text: "Javascript ve Java Spring Boot kullanılarak geliştirilen projemiz, finansal açıdan dezavantajlı gruplara sağlıklı gıdaya erişim sağlamak için web tabanlı bir çözüm sunuyor.",
      },
      fearofai: {
        title:
          "Yapay Zeka Bağımlılığı, Kariyer Kaygısı ve Öğrenci Tükenmişliği Veri Analizi",
        text: "Verilen Kaggle veri seti üzerinde basit bir veri analizi yaptım",
      },
      honeysource: {
        title: "Bal Kaynak Sistemi",
        text: "Tüketicilerin bal özelliklerini ve arıcılar hakkında bilgi görmesi için giriş ve kayıt sistemi. Python Tkinter kullanılarak geliştirildi ve MySQL veritabanına bağlandı.",
      },
      openSource: "Açık Kaynak",
      closedSource: "Kapalı Kaynak",
      learnMore: "Daha Fazla",
    },
  },
};

export default translations;
