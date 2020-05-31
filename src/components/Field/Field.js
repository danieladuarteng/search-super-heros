import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function Field(props) {
  const { id, label, type, name, variant, onChange, value, required } = props;
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      name={name}
      variant={variant}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
}

Field.propTypes = {};

Field.defaultProps = {};

export default Field;
