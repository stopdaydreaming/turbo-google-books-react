import React, { useEffect, useState } from "react";
import axios from "axios"


// function SearchBooks(e) {
//   e.preventDefault()
 
//   axios
//     .get(
//       `https://www.googleapis.com/books/v1/volumes?q=intitle:&key=AIzaSyAfrpQXZXcliTIXdDGXtxQAW6Pi5iGb42w`
//     )
//     .then((response) => {
//        console.log(response.data.items);

//     });
// }


 const BookSearch = () => {

   const [bookSearch, setBookSearch] = useState("");

   const handleFormSubmit = event => {
     event.preventDefault();
  console.log("I was submitted")
     const { value} = event.target;
     console.log(value)
     //setBookSearch(value)
   }


//   useEffect(() => {
    
//   }, []);

  return (
    <div className="mb-5">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="searchBook" className="form-label">
            Search for Book
          </label>
          <input
            // onChange={handleInputChange}
            // value={bookSearch}
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