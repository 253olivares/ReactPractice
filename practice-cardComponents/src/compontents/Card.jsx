// in order to get our prop values from our parent div we need to let the function know we are receiving props
function Card(props) {

    return(
        // Returning our card dive with values we pass on from out parent component
        <div className="card">
                                         {/* we can call our props by using props.attributeName */}
                                         {/* Data flows in one direction so while we can get props from parent div we can not
                                          pass it back up */}
            <img className='cardImage' src={props.profilePic} alt={props.profilePicAlt}/>
            <h2 className='cardTitle'>{props.cardTitle}</h2>
            <p className='titleContent'>{props.cardContent}</p>
        </div>
    );
}

export default Card;