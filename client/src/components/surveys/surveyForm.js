//surveyForm Shows Survey form for a user to add input
import React from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends React.Component {
  render() {
    return <div>SurveyForm</div>;
  }
}
export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
