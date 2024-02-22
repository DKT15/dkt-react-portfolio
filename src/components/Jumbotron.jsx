import React from "react";

function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3 hero__section">
      <div className="container-fluid py-5 hero__wrapper">
        <h1 className="display-5 fw-bold">Welcome to my portfolio website</h1>
        <p className="col-md-8 fs-4 hero__para">
          Click the button below to view my projects.
        </p>
        <button className="btn btn-primary btn-lg hero__button" type="button">
          Click me!
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
