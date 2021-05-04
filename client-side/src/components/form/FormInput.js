import React from 'react';
import { Form } from 'react-bootstrap';

export default function FormInput({
  id,
  name,
  type,
  as,
  options,
  label,
  placeholder,
  onBlur,
  onChange,
  errors,
  touched,
  ...otherProps
}) {
  return (
    <>
      <Form.Group controlId={id}>
        {type === 'checkbox' ? (
          <Form.Check type={type} label={label} />
        ) : (
          <>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              as={as}
              type={type}
              name={name}
              placeholder={placeholder}
              onBlur={onBlur}
              onChange={onChange}
              {...otherProps}
            >
              {as !== 'select'
                ? null
                :
                Array.isArray(options) && options.map((option) => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))
              }
            </Form.Control>
          </>
        )}

        {touched && (
          <Form.Text type="invalid" style={{ color: 'red' }}>
            {errors}
          </Form.Text>
        )}
      </Form.Group>
    </>
  );
}