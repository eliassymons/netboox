import Button from "react-bootstrap/Button";

export default function ListItem(props) {
  return (
    <div className="list-item">
      <img alt="list-item" src={props.image} className="list-img" />
      <div className="list-item-info">
        <div className="title-and-author">
          {" "}
          <h4>{props.title}</h4>
          <h6>{props.author}</h6>
        </div>

        <p>{props.desc}</p>
      </div>
      <div className="btn-container">
        <Button variant="secondary" href={props.link} target="_blank">
          Buy
        </Button>
        <Button variant="danger" value={props.value} onClick={props.removeBook}>
          Remove
        </Button>
      </div>
    </div>
  );
}
