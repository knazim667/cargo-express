import React, { Component } from "react";
import banner from "../../assets/images/truck-delivery.jpg";
import "./banner.css";

class Banner extends Component {
  render() {
    return (
      <div>
        <section className="main-banner">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="cargo-heading">Cargo Express</h3>
                <p className="mt-4 cargo-description">
                  With CargoExpress, we aim to make the entire package delivery
                  experiance straightforward - providing online tools for
                  shipping, monitoring and tracking , landing our expertise in
                  customs clearance, and keeping abreast of all the latest rules
                  and regulation, duties and taxes.
                </p>
                <button className="btn btn-danger btn-lg btn-cargo">
                  want to book service
                </button>
              </div>
              <div className="col-lg-6 p-0">
                <div>
                  <img
                    className="banner-image"
                    src={banner}
                    alt="main-banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;
