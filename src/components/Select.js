import React from "react";
import { Form } from "react-bootstrap";

const Select = (props) => {
  const { onChange, placeholder, value, label, options } = props;

  return (
    <Form.Group className="mb-3" value={value} onChange={onChange}>
      <Form.Label>{label}</Form.Label>
      <Form.Select>
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default Select;
