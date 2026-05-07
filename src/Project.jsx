import Card from './Card.jsx'
function Project(){
  return(
  <div id="project">
    <Card imgUrl="https://i.pinimg.com/736x/2d/0d/2f/2d0d2f9a8be010cd4b3f8142ef8a1311.jpg" 
      title = "This Portfolio Website" 
      text = "Basically what you are viewing right now. I used React library and some dev tools to help with visualization. Check out my Github README for tools." 
      isOpenSource = {true}
      link="https://github.com/jobruv">
    </Card>
    <Card imgUrl="https://i.pinimg.com/736x/a4/db/d8/a4dbd85f1eb0f83223a90b775a8baaba.jpg" title = "Proje2" text = "Lorem ipsum dolor"></Card>
    <Card imgUrl="https://i.pinimg.com/736x/0a/94/c8/0a94c8e933ab643acdfadb9e55272482.jpg" title = "Proje3" text = "Lorem ipsum dolor" isOpenSource = {true}></Card>
    <Card imgUrl="https://i.pinimg.com/736x/ed/16/45/ed16457494a9a8acbe5bfd5c4125faae.jpg" title = "Proje4" text = "Lorem ipsum dolor"></Card>
    <Card imgUrl="https://i.pinimg.com/736x/02/27/25/02272526c17893c12fa46393c907c888.jpg" title = "Proje5" text = "Lorem ipsum dolor"></Card>
    <Card imgUrl="https://i.pinimg.com/1200x/f4/52/06/f452065366c90dfbfdeb1f1da1ca59d8.jpg" title = "Proje6" text = "Lorem ipsum dolor"></Card>
  </div>
  );
}
export default Project