import React, { Component } from "react";
import tracking from "../../assets/images/tracking.jpg";
import loading from "../../assets/images/loading.jpg";
import delivertodoor from "../../assets/images/delivertodoor.jpg";
import deliver from "../../assets/images/deliver.jpg";
import "./process.css";

class Process extends Component {
  render() {
    return (
      <div>
        <section className="process">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <h3 className="pr-heading">The Process</h3>
              </div>
              <div className="col-lg-3 p-3">
                <div>
                  <img
                    className="process-image"
                    src={tracking}
                    alt="tracking"
                  />
                </div>
                <p className="pr-sub-heading">Taking the order</p>
              </div>
              <div className="col-lg-3">
                <div>
                  <img className="process-image" src={deliver} alt="tracking" />
                </div>
                <p className="pr-sub-heading">Getting the parcel</p>
              </div>
              <div className="col-lg-3">
                <div>
                  <img className="process-image" src={loading} alt="tracking" />
                </div>
                <p className="pr-sub-heading">loading package</p>
              </div>
              <div className="col-lg-3">
                <div>
                  <img
                    className="process-image"
                    src={delivertodoor}
                    alt="tracking"
                  />
                </div>
                <p className="pr-sub-heading">deliver to door</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Process;
