import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Form } from "react-bootstrap";

const Input = forwardRef((props, ref) => {
  const { onChange, placeholder, value, label } = props;
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  
  return (
    <Form.Group className="mb-3" controlId="formBasicGeriÖdeme">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
});

export default Input;
