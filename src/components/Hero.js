import Button from "react-bootstrap/Button";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <p>{props.desc}</p>
        <div className="btn-container">
          <Button
            variant="outline-secondary"
            value={props.value}
            onClick={props.handleClick}
          >
            Add to My List
          </Button>
        </div>
      </div>
      <img alt={props.title} src={props.image} className="hero-img" />
    </div>
  );
}
