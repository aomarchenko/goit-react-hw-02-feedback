import './App.css';

import React, { Component } from 'react';
import Statistics from './components/statistics/Statistics';
import FeedbackOptions from './components/feedback/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/notification/Notification';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  makeGoodFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  makeNeutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  makeBadFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      100 * (this.state.good / (this.state.good + this.state.neutral + this.state.bad)),
    );
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.makeGoodFeedback}
            onBad={this.makeBadFeedback}
            onNeutral={this.makeNeutralFeedback}
          />{' '}
        </Section>
        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad > 0 && (
            <Statistics
              onTotal={this.countTotalFeedback()}
              onPercentage={this.countPositiveFeedbackPercentage()}
              bad={this.state.bad}
              good={this.state.good}
              neutral={this.state.neutral}
            />
          )}
        </Section>
        <Section>
          {this.state.good + this.state.neutral + this.state.bad === 0 && (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
export default Feedback;
