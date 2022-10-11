import "./style.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import MyList from "./components/MyList";
import About from "./components/About";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [myList, setMyList] = React.useState([] || null);
  const [bookData, setBookData] = React.useState({} || null);
  const uniqueList =
    myList &&
    Array.from(new Set(myList.map((a) => a.title))).map((title) => {
      return myList.find((a) => a.title === title);
    });
  React.useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction.json?api-key=pUSXKg6ixTcjaXyQs8e9UBurkvHuLw9h"
    )
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  }, []);

  const exists = Boolean(bookData.results);
  const heroBook = exists
    ? {
        title: bookData.results.books[0].title,
        author: bookData.results.books[0].author,
        image: bookData.results.books[0].book_image,
        description: bookData.results.books[0].description,
      }
    : "";
  return (
    <div className="App">
      <HashRouter>
        <Header myList={myList} uniqueList={uniqueList} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                title={heroBook.title}
                author={heroBook.author}
                image={heroBook.image}
                desc={heroBook.description}
                setMyList={setMyList}
                myList={myList}
                uniqueList={uniqueList}
              />
            }
          />
          <Route
            path="/my-list"
            element={
              <MyList
                myList={myList}
                uniqueList={uniqueList}
                setMyList={setMyList}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
