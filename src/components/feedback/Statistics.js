import React from 'react';
const Statistics = ({ onTotal, onPercentage, good, bad, neutral }) => (
  <div className="FeedbackStatistics">
    <span className="FeedbackResults">Good: {good}</span>
    <span className="FeedbackResults">Neutral: {neutral}</span>
    <span className="FeedbackResults">Bad: {bad}</span>
    <p>Total Feedbacks: {onTotal}</p>
    <p>Everage Good Values: {onPercentage}%</p>
  </div>
);
export default Statistics;
