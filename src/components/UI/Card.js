import '../UI/Card.css'; 
function Card(props){
    const classes = 'card' + props.className;
    return <div className={className}>{props.children}</div>
}


export default Card;