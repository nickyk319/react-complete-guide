import './Card.css';

function Card(props) {
  // white space after 'card' is important!!
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

export default Card;