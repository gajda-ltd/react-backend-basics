import React from "react";

const Input = ({ value, onChange, label }) => {
  return (
    <label>
      {label}:
      <input value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
