function List(){
    const techstack=[
        {id: 1, category: "Language", items: ["Java","Python","SQL","C#","Javascript","PHP"]},
        {id: 2, category: "Framework/Library",items: ["Spring Boot","React"]},
        {id: 3, category: "Database", items: ["MySQL","PostgreSQL","Microsoft SQL Server","MongoDB"]},
        {id: 4, category: "Tools", items: ["Git","Excel"]},
        {id: 5, category: "Editing", items:["Photoshop","Premiere Pro","After Effects","Media Encoder"]}
    ];
const allItems = techstack.flatMap(tech => tech.items);
  return (
    <div id="list">
      <ul>
        {allItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default List