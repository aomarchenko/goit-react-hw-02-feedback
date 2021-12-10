import React from 'react';
const Statistics = ({ onTotal, onPercentage, good, bad, neutral }) => (
  <div>
    <span>Good: {good} </span>
    <span>Neutral: {neutral} </span>
    <span>Bad: {bad} </span>
    <p>Total Feedbacks: {onTotal}</p>
    <p>Everage Good Values: {onPercentage}%</p>
  </div>
);
export default Statistics;
