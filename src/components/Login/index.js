import React from "react";
import Form from "../common/form";

class Login extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        password: "",
      },
      errors: {},
    };
  }
  validateForm = () => {
    const { data } = { ...this.state };
    const errors = {};
    if (data.name === "") errors.name = "Name Field is Required";
    if (data.password === "") errors.password = "Password Field is Required";
    return Object.keys(errors).length === 0 ? "" : errors;
  };
  doSubmit = () => {
    console.log("login :", this.state.data);
  };
  render() {
    return (
      <div>
        <div className="col-lg-4">
          <h3>Login</h3>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("Name", "name")}
            {this.renderInput("Password", "password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
