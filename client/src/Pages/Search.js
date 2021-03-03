import React, {useState } from "react";
import BookSearch from "../components/BookSearch/BookSearch";
import BookResult from "../components/BookResult/BookResult";
import axios from "axios";

const Search = () => {
  const [books, setBooks] = useState([]);

  const saveBook = (book) => {
    const bookResults = {
      authors: book.authors,
      description: book.description,
      image: book.imageLinks.thumbnail,
      link: book.infoLink,
      title: book.title
    };
    axios
      .post("/api/books", bookResults)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-light p-5">
            <h1>Book Search</h1>
            <BookSearch setBooks={setBooks} />
          </div>
          <h1 className="mt-3">Results</h1>
          {books.map(book => (
            <BookResult book={book} key={book.id} saveBook={saveBook} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
