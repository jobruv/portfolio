//import pic from './assets/profile.jpg'
function Card(props){
    const statusStyle={
        backgroundColor:props.isOpenSource ? "green" : "red"
    }
    return(
        <div className="card">
            <img className = "card-image" alt="project preview" src={props.imgUrl}></img>
            <h2 className = "card-title">{props.title}</h2>
            <p className="card-text">{props.text}</p>
            <p className= "card-source" style = {statusStyle}>{props.isOpenSource ? "Open Source" : "Closed Source"}</p>
            <a href={props.link} target="_blank" rel="_noreferrer"><button className= "card-button">Learn More</button></a>
        </div>
    );
}
export default Card