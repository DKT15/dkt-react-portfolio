import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron() {
  return (
    <div className="p-5 mb-4 hero__section">
      <div className="container-fluid py-5 hero__wrapper">
        <img
          className="working__image"
          src="./assets/images/working-image.svg"
          alt=""
        ></img>
        <h1 className="display-5 fw-bold hero__header">
          Welcome to my React portfolio website👋
        </h1>
        <p className="col-md-8 fs-4 hero__para">
          I'm <b className="blue">Danté Kellman-Thompson</b> a
          <b className="blue"> Front-End Software Engineer</b> with a strong
          passion for developing amazing websites, with
          <b className="blue"> great user experiences.</b> I have been learning
          how to code through different jobs for the past 6 years.
          <br />
          <br />
          Click the button below to view my <b className="blue">projects.</b>
        </p>
        <a href="/projects">
          <button className="btn btn-primary btn-lg hero__button" type="button">
            Click me!
          </button>
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;
