//SurveyNew is parent component to SurveyForm and SurveyFormReview
import React from 'react';
import SurveyForm from './surveyForm';

class SurveyNew extends React.Component {
  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}
export default SurveyNew;
