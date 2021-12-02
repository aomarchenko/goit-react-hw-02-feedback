import React from 'react';

const FeedbackOptions = ({ onGood, onBad, onNeutral }) => (
  <div className="FeedbackControls">
    <button
      type="button"
      onClick={event => {
        onGood();
      }}
    >
      Good
    </button>
    <button
      type="button"
      onClick={event => {
        onNeutral();
      }}
    >
      Neutral:
    </button>
    <button
      type="button"
      onClick={event => {
        onBad();
      }}
    >
      Bad
    </button>
  </div>
);
export default FeedbackOptions;
