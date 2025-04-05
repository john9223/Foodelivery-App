import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
      });

      const response = await res.json();
      setorderData(response);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {Object.keys(orderData).length !== 0 && orderData.orderData
            ? orderData.orderData.order_data
                .slice(0)
                .reverse()
                .map((item, index) => (
                  <div key={index}>
                    {item.map((arrayData, i) => (
                      <div key={i}>
                        {arrayData.Order_date ? (
                          <div className="m-auto mt-5">
                            {arrayData.Order_date}
                            <hr />
                          </div>
                        ) : (
                          <div className="col-12 col-md-6 col-lg-3">
                            <div
                              className="card mt-3"
                              style={{ width: "16rem", maxHeight: "360px" }}
                            >
                              <div className="card-body">
                                <h5 className="card-title">
                                  {arrayData.name}
                                </h5>
                                <div
                                  className="container w-100 p-0"
                                  style={{ height: "38px" }}
                                >
                                  <span className="m-1">{arrayData.qty}</span>
                                  <span className="m-1">{arrayData.size}</span>
                                  <div className="d-inline ms-2 h-100 w-20 fs-5">
                                    ₹{arrayData.price}/-
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))
            : "No Orders Found"}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyOrder;
