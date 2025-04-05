import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";

function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
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
      <div className="container">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div key={data._id} className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr></hr>
                  {foodItem.length > 0 ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search)
                      )
                      .map((filteritems) => (
                        <div
                          key={filteritems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodItem ={filteritems}
                            options={filteritems.options[0]}
                          ></Card>
                        </div>
                      ))
                  ) : (
                    <div>No such data</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
