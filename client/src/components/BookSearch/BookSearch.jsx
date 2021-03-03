import React, { useEffect, useState } from "react";
import axios from "axios";

const BookSearch = props => {
  const [bookSearch, setBookSearch] = useState("");

  const searchBooks = value => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${value}&key=AIzaSyAfrpQXZXcliTIXdDGXtxQAW6Pi5iGb42w`
      )
      .then(response => {
        console.log(response.data.items);
        props.setBooks(response.data.items);
      });
  };

  const handleInputChange = e => {
    const { value } = e.target;
    console.log(value);
    setBookSearch(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("I was submitted");
    searchBooks(bookSearch);
  };

  return (
    <div className="mb-5">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="searchBook" className="form-label">
            Search for Book
          </label>
          <input
            onChange={handleInputChange}
            value={bookSearch}
            type="text"
            className="form-control mb-3 "
            id="searchBook"
          />
          <button type="submit" className="btn btn-danger float-right">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookSearch;
