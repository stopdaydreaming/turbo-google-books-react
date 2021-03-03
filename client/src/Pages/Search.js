import React from "react";
import BookSearch from "../components/BookSearch/BookSearch";
import BookResult from "../components/BookResult/BookResult";




const Search = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-light p-5">
            <h1>Book Search</h1>
            <BookSearch />
          </div>
          <BookResult />
        </div>
      </div>
    </div>
  );
};

export default Search;
