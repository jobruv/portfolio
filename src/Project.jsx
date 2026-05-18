import Card from "./Card.jsx";
function Project() {
  return (
    <div id="project">
      <Card
        imgUrl="src\assets\sketch.webp"
        title="This Portfolio Website"
        text="Basically what you are viewing right now. I used React library and some dev tools to help with visualization. Check out my Github README for tools."
        isOpenSource={true}
        link="https://github.com/jobruv/portfolio"
      ></Card>
      <Card
        imgUrl="src\assets\projects\kolektif.webp"
        title="Collective Health System"
        text="Our project, implemented using Javascript and Java Spring Boot, offers a web solution to provide access to healthy food for financially disadvantaged groups.(Turkish)"
        isOpenSource={true}
        link="https://github.com/jobruv/kolektif-saglik-sistemi"
      ></Card>
      <Card
        imgUrl="src/assets/projects/fearofai.webp"
        title="AI Dependency, Career Anxiety and Student Burnout Data Analysis"
        text="Did some simple data analysis based on the given Kaggle dataset"
        isOpenSource={true}
        link="https://github.com/jobruv/StudentAnxietyOnAI"
      ></Card>
      <Card
        imgUrl="src\assets\projects\honeysource.webp"
        title="Honey Source System"
        text="Login and registration system for consumers to see the characteristics of honey and information about beekeepers. Implemented using Python Tkinter and connected to a MySQL database. (Turkish)"
        isOpenSource={true}
        link="https://github.com/jobruv/bal-kaynak-sistemi"
      ></Card>
    </div>
  );
}
export default Project;
