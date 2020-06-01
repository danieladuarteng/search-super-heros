import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

function Field (props) {
  const { id, label, type, name, variant, onChange, value, required } = props
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
  )
}

Field.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool
}

Field.defaultProps = {
  id: undefined,
  required: false
}

export default Field
