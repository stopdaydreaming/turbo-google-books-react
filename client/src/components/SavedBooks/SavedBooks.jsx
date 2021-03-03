import React from "react";

const SavedBooks = props => {
  const { authors, title, link, image, description } = props.book;

  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-body">
          <div id="buttons" className="float-right">
            <a href={link} className="btn btn-outline-primary mr-3">
              VIEW
            </a>
            <a href="#" className="btn btn-outline-danger">
              DELETE
            </a>
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
