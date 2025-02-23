

const Card = (props) =>{
    return(<div className="card">
        <img src={props.img}></img>
        <div className="interaction-box">
            <h2>{props.name}</h2>
            <p>{props.origin}</p>
            <button className="view-menu">View Menu</button>
        </div>
    </div>);
}

export default Card;