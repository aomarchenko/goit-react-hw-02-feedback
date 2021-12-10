import React from 'react';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ onGood, onBad, onNeutral }) => (
  <div>
    <button
      className={styles.FeedbackControls}
      type="button"
      onClick={event => {
        onGood();
      }}
    >
      Good
    </button>
    <button
      className={styles.FeedbackControls}
      type="button"
      onClick={event => {
        onNeutral();
      }}
    >
      Neutral
    </button>
    <button
      className={styles.FeedbackControls}
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
