import React from "react";

import Slider from "./Slider";

export default function SliderContainer(props) {
  //ALLBOOKS
  React.useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=pUSXKg6ixTcjaXyQs8e9UBurkvHuLw9h`
    )
      .then((res) => res.json())
      .then((data) => props.setAllBooks(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // NONFICTION;
  const [nonfiction, setNonfiction] = React.useState([]);

  React.useEffect(() => {
    props.allBooks.results &&
      setNonfiction(props.allBooks.results.lists[1].books);
  }, [props.allBooks]);

  const nonfictionBooks =
    nonfiction &&
    nonfiction.slice(0, 5).map((book, i) => {
      return (
        <div className="non-fiction">
          <Slider
            value={[1, i]}
            title={book.title}
            image={book.book_image}
            className="slider"
            key={[1, i]}
            author={book.author}
            desc={book.description}
            index={i}
            handleClick={props.handleClick}
          />
        </div>
      );
    });

  // FICTION;
  const [fiction, setFiction] = React.useState([]);

  React.useEffect(() => {
    props.allBooks.results && setFiction(props.allBooks.results.lists[0].books);
  }, [props.allBooks]);

  const fictionBooks =
    fiction &&
    fiction.slice(0, 5).map((book, i) => {
      return (
        <div className="fiction">
          <Slider
            value={[0, i]}
            title={book.title}
            image={book.book_image}
            className="slider"
            key={[0, i]}
            author={book.author}
            desc={book.description}
            index={i}
            handleClick={props.handleClick}
          />
        </div>
      );
    });
  // Children;
  const [children, setChildren] = React.useState([]);

  React.useEffect(() => {
    props.allBooks.results &&
      setChildren(props.allBooks.results.lists[7].books);
  }, [props.allBooks]);

  const childrenBooks =
    children &&
    children.slice(0, 5).map((book, i) => {
      return (
        <div className="children">
          <Slider
            value={[7, i]}
            title={book.title}
            image={book.book_image}
            className="slider"
            key={[7, i]}
            author={book.author}
            desc={book.description}
            index={i}
            handleClick={props.handleClick}
          />
        </div>
      );
    });
  // YOUNG ADULT;
  const [youngAdult, setYoungAdult] = React.useState([]);

  React.useEffect(() => {
    props.allBooks.results &&
      setYoungAdult(props.allBooks.results.lists[10].books);
  }, [props.allBooks]);

  const youngAdultBooks =
    youngAdult &&
    youngAdult.slice(0, 5).map((book, i) => {
      return (
        <div className="young-adult">
          <Slider
            value={[10, i]}
            title={book.title}
            image={book.book_image}
            className="slider"
            key={[10, i]}
            author={book.author}
            desc={book.description}
            index={i}
            handleClick={props.handleClick}
          />
        </div>
      );
    });
  // BUSINESS
  const [business, setBusiness] = React.useState([]);

  React.useEffect(() => {
    props.allBooks.results &&
      setBusiness(props.allBooks.results.lists[13].books);
  }, [props.allBooks]);

  const businessBooks =
    business &&
    business.slice(0, 5).map((book, i) => {
      return (
        <div className="business">
          <Slider
            value={[13, i]}
            title={book.title}
            image={book.book_image}
            className="slider"
            key={[13, i]}
            author={book.author}
            desc={book.description}
            index={i}
            handleClick={props.handleClick}
          />
        </div>
      );
    });

  // GRAPHIC NOVELS
  const [graphicNovels, setGraphicNovels] = React.useState([]);

  React.useEffect(() => {
    props.allBooks.results &&
      setGraphicNovels(props.allBooks.results.lists[14].books);
  }, [props.allBooks]);

  const graphicNovelBooks =
    graphicNovels &&
    graphicNovels.slice(0, 5).map((book, i) => {
      return (
        <div className="graphicNovels">
          <Slider
            value={[14, i]}
            title={book.title}
            image={book.book_image}
            className="slider"
            key={[14, i]}
            author={book.author}
            desc={book.description}
            index={i}
            handleClick={props.handleClick}
          />
        </div>
      );
    });

  return (
    <div className="all-categories">
      <div className="fiction-container">
        <h1>Fiction</h1>
        <div className="slider-container">
          {fictionBooks ? fictionBooks : ""}
        </div>
      </div>
      <div className="nonfiction-container">
        <h1>Non-fiction</h1>
        <div className="slider-container">
          {nonfictionBooks ? nonfictionBooks : ""}
        </div>
      </div>
      <div className="children-container">
        <h1>Children</h1>
        <div className="slider-container">
          {childrenBooks ? childrenBooks : ""}
        </div>
      </div>
      <div className="young-adult-container">
        <h1>Young Adult</h1>
        <div className="slider-container">
          {youngAdultBooks ? youngAdultBooks : ""}
        </div>
      </div>
      <div className="business-container">
        <h1>Business</h1>
        <div className="slider-container">
          {businessBooks ? businessBooks : ""}
        </div>
      </div>
      <div className="graphic-novels-container">
        <h1>Graphic Novels</h1>
        <div className="slider-container">
          {graphicNovelBooks ? graphicNovelBooks : ""}
        </div>
      </div>
    </div>
  );
}
