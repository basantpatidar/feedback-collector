//SurveyField contains logic to render single input field
//label and text input
import React from 'react';

//destructuring input from props object
export default ({ input }) => {
  return (
    <div>
      <input {...input} />
    </div>
  );
};
