import React, { useEffect, useState } from "react";
import axios from "axios";
import SavedBooks from "../components/SavedBooks/SavedBooks";

const Saved = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    axios
      .get("/api/books")
      .then(res => {
        console.log(res);
        setBooks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Saved Books</h1>
          {books.map(book => (
            <SavedBooks book={book} key={book._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saved;
