import React from 'react';
import propTypes from 'prop-types';
import styles from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={styles.feedback}>
      <h1 className={styles.feedbackTitle}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.any.isRequired,
};
export default Section;
