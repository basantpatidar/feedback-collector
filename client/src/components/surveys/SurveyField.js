//SurveyField contains logic to render single input field
//label and text input
import React from 'react';

//destructuring input from props object and nested destructuring for meta
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};
