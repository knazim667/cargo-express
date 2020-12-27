import React from "react";
import Form from "../common/form";

class Register extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
      errors: {},
    };
  }
  validateForm = () => {
    const { data } = { ...this.state };
    const errors = {};
    const validateEmail = (email) => {
      let re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      return re.test(email);
    };
    const validatePassword = (password) => {
      let reg = /^[a-zA-Z0-9]{8,12}$/;
      return reg.test(password);
    };
    if (data.name === "") errors.name = "Name Field is Required";
    if (data.email === "") errors.email = "Email Field is Required";
    if (!validateEmail(data.email))
      errors.email = "Please Enter Correct email id";
    if (data.phone === "") errors.phone = "phone Field is Required";
    if (data.password === "") errors.password = "Password Field is Required";
    if (!validatePassword(data.password))
      errors.password =
        "Minimum eight characters, at least one letter and one number";
    if (data.confirmPassword !== data.password)
      errors.confirmPassword = "Password doesn't match";
    return Object.keys(errors).length === 0 ? "" : errors;
  };
  doSubmit = () => {
    console.log("user object", this.state.data);
  };
  render() {
    return (
      <div>
        <div className="col-lg-4 register-card">
          <h3 className="heading">Register </h3>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("Name", "name")}
            {this.renderInput("Email", "email", "email")}
            {this.renderInput("Phone", "phone", "number")}
            {this.renderInput("Password", "password", "password")}
            {this.renderInput(
              "Confirm Password",
              "confirmPassword",
              "password"
            )}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
