function Card(props) {

    return(
        <div className="card">
            <img className='cardImage' src={props.profilePic} alt={props.profilePicAlt}/>
            <h2 className='cardTitle'>{props.cardTitle}</h2>
            <p className='titleContent'>{props.cardContent}</p>
        </div>
    );
}

export default Card;