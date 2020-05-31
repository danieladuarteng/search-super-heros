import React from "react";

function Form(props) {
  const { autoComplete, noValidate, onSubmit, children } = props;
  return (
    <form
      autoComplete={autoComplete}
      noValidate={noValidate}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
