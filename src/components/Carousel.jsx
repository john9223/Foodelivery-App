import React from "react";
import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-caption" style={{zIndex:"10"}}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>
          {/* First Image */}
          <div className="carousel-item active">
            <img
              src={food1}
              className="d-block w-100"
              alt="Food 1"
              style={{
                height: "500px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />
          </div>

          {/* Second Image */}
          <div className="carousel-item">
            <img
              src={food2}
              className="d-block w-100"
              alt="Food 2"
              style={{
                height: "500px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />
          </div>

          {/* Third Image */}
          <div className="carousel-item">
            <img
              src={food3}
              className="d-block w-100"
              alt="Food 3"
              style={{
                height: "500px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />
          </div>
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
