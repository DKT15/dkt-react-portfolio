import React from "react";

function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3 hero__section">
      <div className="container-fluid py-5 hero__wrapper">
        <h1 className="display-5 fw-bold">My Portfolio</h1>
        <p className="col-md-8 fs-4 hero__para">
          Below is a portfolio of the projects I have completed to showcase the
          skills.
        </p>
        <button className="btn btn-primary btn-lg hero__button" type="button">
          Find out more
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
