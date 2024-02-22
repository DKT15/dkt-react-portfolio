import React from "react";

function Card() {
  return (
    <>
      <h2>Projects</h2>
      <div className="container-fluid work__section">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card work__card" style="width: 18rem">
              <img
                src="./assets/images/02-portfolio-4.jpg"
                className="card-img-top work_card--img"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Surf Report</h5>
                <p className="card-text">MERN stack</p>
                <a href="#" className="btn btn-primary card__btn">
                  Click here
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card work__card" style="width: 18rem">
              <img
                src="./assets/images/02-portfolio-1.jpg"
                className="card-img-top work_card--img"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">LED Wall</h5>
                <p className="card-text">Node/IoT</p>
                <a href="#" className="btn btn-primary card__btn">
                  Click here
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card work__card" style="width: 18rem">
              <img
                src="./assets/images/02-portfolio-2.jpg"
                className="card-img-top work_card--img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text">Javascript/CSS</p>
                <a href="#" className="btn btn-primary card__btn">
                  Click here
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card work__card" style="width: 18rem">
              <img
                src="./assets/images/02-portfolio-3.jpg"
                className="card-img-top work_card--img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Pastel Puzzles</h5>
                <p className="card-text">MERN Stack</p>
                <a href="#" className="btn btn-primary card__btn">
                  Click here
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card work__card" style="width: 18rem">
              <img
                src="./assets/images/02-run-buddy.jpg"
                className="card-img-top work_card--img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Run Buddy</h5>
                <p className="card-text">HTML/CSS</p>
                <a href="#" className="btn btn-primary card__btn">
                  Click here
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card work__card" style="width: 18rem">
              <img
                src="./assets/images/Portfolio-demo.jpg"
                className="card-img-top work_card--img"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Alternative Portfolio</h5>
                <p className="card-text">HTML/CSS</p>
                <a
                  href="https://dkt15.github.io/Alternative-Portfolio/"
                  className="btn btn-primary card__btn--portfolio"
                >
                  Click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
