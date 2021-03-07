import React from "react";
import axios from "axios";

const SavedBooks = props => {
  const { _id, authors, title, link, image, description } = props.book;

  const deleteBook = (id) => {
    console.log("Delete book clicked!");
    axios
      .delete(`/api/books/${props.book._id}`)
      .then((res) => {
        console.log(res.data);
        refreshPage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const refreshPage = ()=>{
    window.location.reload();
  }

  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-body">
          <div id="buttons" className="float-right">
            <a href={link} className="btn btn-outline-primary mr-3">
              VIEW
            </a>
            <button
              className="btn btn-outline-danger"
              // onClick={() => deleteBook(book._id)}
              onClick={() => deleteBook()}
            >
              DELETE
            </button>
          </div>
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{authors[0]}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <img className="full-img" src={image} alt="book image" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <p className="card-text">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedBooks;
