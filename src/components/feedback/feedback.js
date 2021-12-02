import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends React.Component {
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
      <div>
        <Section />
        <FeedbackOptions
          onGood={this.makeGoodFeedback}
          onBad={this.makeBadFeedback}
          onNeutral={this.makeNeutralFeedback}
        />
        {this.state.good + this.state.neutral + this.state.bad === 0 && <Notification />}

        {this.state.good + this.state.neutral + this.state.bad > 0 && (
          <Statistics
            onTotal={this.countTotalFeedback()}
            onPercentage={this.countPositiveFeedbackPercentage()}
            bad={this.state.bad}
            good={this.state.good}
            neutral={this.state.neutral}
          />
        )}
      </div>
    );
  }
}
export default Feedback;
