import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

function ButtonCustom(props) {
  const { type, variant, color, onClick, children, disabled, loading } = props;
  return (
    <Button
      style={{ padding: "15px" }}
      type={type}
      variant={variant}
      color={color}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

ButtonCustom.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonCustom.defaultProps = {
  loading: false,
  onClick: undefined,
};

export default ButtonCustom;
