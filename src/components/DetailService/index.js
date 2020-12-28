import axios from "axios";
import React, { Component } from "react";

class DetailService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {},
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/services/${id}`)
      .then((res) => {
        let data = res.data;
        this.setState({ service: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { service } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{service.serviceName}</h3>
              <p>{service.parcelSize}</p>
              <p>{service.parcelCharges}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailService;
