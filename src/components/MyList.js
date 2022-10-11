import ListItem from "./ListItem";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function MyList(props) {
  function clearList() {
    props.setMyList([]);
  }
  const listItems =
    props.uniqueList &&
    props.uniqueList.map((item, index) => {
      return (
        <ListItem
          title={item.title}
          author={item.author}
          image={item.book_image}
          desc={item.description}
          link={item.amazon_product_url}
          setMyList={props.setMyList}
          value={item.title}
          key={index}
          removeBook={removeBook}
        />
      );
    });

  const listItemsAndBtn = (
    <div>
      {listItems}{" "}
      <div className="clear-btn-container">
        <Button
          variant="outline-danger"
          className="clear-btn"
          onClick={clearList}
        >
          Clear List
        </Button>
      </div>
    </div>
  );
  function removeBook(e) {
    e.preventDefault();
    const value = e.target.value;
    const newList = props.myList.filter((obj) => {
      return obj.title !== value;
    });
    props.setMyList(newList);
  }
  return (
    <div className="my-list">
      <h1 className="list-title">My List</h1>
      {props.myList.length > 0 ? (
        listItemsAndBtn
      ) : (
        <div className="empty-list">
          <h3>Your List is Empty</h3>
          <Button variant="outline-secondary">
            <Link className="nav-link" to="/">
              Add Books
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
