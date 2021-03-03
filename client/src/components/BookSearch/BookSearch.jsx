import React, { useEffect, useState } from "react";
import axios from "axios";

// const query =  https://www.googleapis.com/books/v1/volumes?q=intitle:{formValue}&key=AIzaSyAfrpQXZXcliTIXdDGXtxQAW6Pi5iGb42w

const SearchBooks = () => {

  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyAfrpQXZXcliTIXdDGXtxQAW6Pi5iGb42w`
    )
    .then((response) => {
       console.log(response);
      //  console.log(response.data.items[0].volumeInfo.title);
      //  console.log(response.data.items[0].volumeInfo.authors[0]);
      //  console.log(response.data.items[0].volumeInfo.imageLinks.thumbnail);
    });
}

const BookSearch = () => {

  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    const { value} = event.target;
    setBookSearch(value)
  }


  useEffect(() => {
    SearchBooks();
  }, []);

  return (
    <div className="mb-5">
      <form onSubmit={SearchBooks()}>
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
