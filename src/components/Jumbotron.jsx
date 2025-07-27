import React from "react";
import "../styles/Jumbotron.css";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <div className="p-5 mb-4 hero__section">
      <div className="container-fluid py-5 hero__wrapper">
        <div className="content__wrapper">
          <h1 className="display-5 fw-bold hero__header">
            Welcome to my portfolio!
          </h1>
          <div className="para__wrapper">
            <p className="col-md-8 fs-4 hero__para">
              I'm <b className="blue">Danté Kellman-Thompson</b> a
              <b className="blue"> Front-End Software Engineer</b> with a strong
              passion for developing amazing websites, with
              <b className="blue"> great user experiences.</b> I have been
              learning how to code through different jobs for the past 7 years.
              <br />
              <br />
            </p>
          </div>
          <section className="btns__wrapper">
            <Link className="btn__wrapper" to="/developmentprojects">
              <button className="btn btn-lg hero__button" type="button">
                Development Projects
              </button>
            </Link>
            <Link className="btn__wrapper" to="/liveprojects">
              <button className="btn btn-lg hero__button" type="button">
                Live Projects
              </button>
            </Link>
          </section>
        </div>
        <div className="img__wrapper">
          <img
            className="working__image"
            src="./assets/images/web-app.svg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
