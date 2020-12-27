import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <div className="col-lg-4 register-card">
          <h3 className="heading">Register </h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email id</label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone #</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input
                type="text"
                name="confirmpassword"
                value={user.confirmPassword}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary btn-block">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
