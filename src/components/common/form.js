import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    console.log("errors", errors);
    if (errors) return;

    this.doSubmit();
  };

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    const data = { ...this.state.data };
    data[key] = value;

    this.setState({ data });
  };

  renderInput(label, name, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        label={label}
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderButton(label) {
    return <button className="btn btn-primary btn-block">{label}</button>;
  }
}

export default Form;
