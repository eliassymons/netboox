import React from "react";
import Hero from "./Hero";
import SliderContainer from "./SliderContainer";

export default function Main(props) {
  const [allBooks, setAllBooks] = React.useState({} || null);
  function handleClick(e) {
    e.preventDefault();
    const value = e.target.value;
    const valueArr = value.split(",");
    const numArr = valueArr.map((val) => parseInt(val));
    const mainIndex = numArr[0];
    const individualIndex = numArr[1];

    props.setMyList((prev) => {
      return [
        ...prev,
        allBooks.results.lists[mainIndex].books[individualIndex],
      ];
    });
  }

  return (
    <div className="main">
      <Hero
        title={props.title}
        author={props.author}
        image={props.image}
        desc={props.description}
        setMyList={props.setMyList}
        myList={props.myList}
        uniqueList={props.uniqueList}
        allBooks={allBooks}
        setAllBooks={setAllBooks}
        handleClick={handleClick}
        value={[0, 0]}
      />
      <SliderContainer
        setMyList={props.setMyList}
        uniqueList={props.uniqueList}
        myList={props.myList}
        allBooks={allBooks}
        setAllBooks={setAllBooks}
        handleClick={handleClick}
      />
    </div>
  );
}
