import Button from "react-bootstrap/Button";

export default function Slider(props) {
  return (
    <div className="all-slides">
      <div className="category">
        <img alt="category" src={props.image} className="slider-img" />
        <div className="book-info">
          <div className="title-info">
            <h4>{props.title}</h4>
            <h5>{props.author}</h5>
          </div>
          <p className="desc">{props.desc}</p>
          <div className="btn-container">
            <Button
              value={props.value}
              variant="outline-primary"
              onClick={props.handleClick}
            >
              Add to My list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
