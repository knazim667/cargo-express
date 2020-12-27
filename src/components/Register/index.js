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
      errors: {},
    };
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    const user = { ...this.state.user };
    user[key] = value;

    this.setState({ user });
  };

  validateForm = () => {
    const { user } = { ...this.state };
    const errors = {};
    if (user.name === "") errors.name = "Name Field is Required";
    if (user.email === "") errors.email = "Email Field is Required";
    if (user.phone === "") errors.phone = "phone Field is Required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors });
    console.log("errors", errors);
    if (errors) return;
    console.log("user object", this.state.user);
  };
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
                name="confirmPassword"
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
