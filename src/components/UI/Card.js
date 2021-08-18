import "./Card.css"

//contain components
function Card(props) {
    //that any value set on the class named prop is added to this long string of class names
    //the white space is important after card
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;