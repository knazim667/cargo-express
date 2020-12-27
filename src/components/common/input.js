import React from "react";

const Input = ({ label, name, value, onChange, type, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
