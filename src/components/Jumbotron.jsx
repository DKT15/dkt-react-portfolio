import React from "react";
import "../styles/Jumbotron.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Jumbotron() {
  return (
    <section className="p-5 mb-4 hero__section">
      <div className="container-fluid py-5 hero__wrapper">
        <header className="content__wrapper">
          <h1 className="display-5 fw-bold hero__header">
            Welcome to my portfolio!
          </h1>
          <p className="col-md-8 hero__para">
            I'm <strong className="blue">Danté</strong>, a
            <strong className="blue"> Front-End Software Engineer</strong> with
            a strong passion for developing amazing websites, with
            <strong className="blue"> great user experiences.</strong> I have
            been learning how to code through different jobs for the past 7
            years.
            <br />
            <br />
          </p>
          <div className="btns__wrapper">
            <Link className="livebtn__wrapper" to="/liveprojects">
              <button className="btn btn-lg hero__button" type="button">
                Live Projects
              </button>
            </Link>
            <Link className="devbtn__wrapper" to="/developmentprojects">
              <button className="btn btn-lg hero__button" type="button">
                Development Projects
              </button>
            </Link>
          </div>
          <div className="form-links">
            <a
              href="https://github.com/DKT15"
              target="_blank"
              aria-label="GitHub"
            >
              <FontAwesomeIcon className="form__link" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/dant%C3%A9-kellman-thompson-8b720720a/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon className="form__link" icon={faLinkedin} />
            </a>
            <a
              href="./assets/DKT-Front-End-Software-Engineer-CV.pdf"
              target="_blank"
              aria-label="Download CV"
            >
              <FontAwesomeIcon className="form__link" icon={faFile} />
            </a>
          </div>
        </header>
        <figure className="img__wrapper">
          <img
            className="working__image"
            src="./assets/images/web-app.svg"
            alt="Illustration of a web application"
          />
        </figure>
      </div>
    </section>
  );
}
