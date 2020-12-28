import axios from "axios";
import React, { Component } from "react";

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/services")
      .then((res) => {
        let data = res.data;
        this.setState({ data: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleClick = (item) => {
    this.props.history.push(`/services/${item.id}`);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Our Services</h3>
              <p>
                Cargo service is believed in serving the client at their door
                step. our thinking is the best certification of a quality is the
                measurement of the scale of the smile on the customers face.
              </p>
            </div>
          </div>
          <div className="row">
            {this.state.data.map((item) => (
              <div
                key={item.id}
                onClick={() => this.handleClick(item)}
                className="col-lg-4"
              >
                <h3>{item.serviceName}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceList;
