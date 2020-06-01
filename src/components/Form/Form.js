import React from 'react'
import PropTypes from 'prop-types'

function Form (props) {
  const { autoComplete, noValidate, onSubmit, children } = props
  return (
    <form
      autoComplete={autoComplete}
      noValidate={noValidate}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

Form.propTypes = {
  autoComplete: PropTypes.string.isRequired,
  noValidate: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired
}

export default Form
