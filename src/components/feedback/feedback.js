import React from 'react';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    goodValue: this.props.initialValue,
    neutralValue: this.props.initialValue,
    badValue: this.props.initialValue,
    totalValue: this.props.initialValue,
    everageGoodValue: this.props.initialValue,
  };

  makeGoodFeedback = () => {
    this.setState(prevState => {
      return { goodValue: prevState.goodValue + 1 };
    });
  };

  makeNeutralFeedback = () => {
    this.setState(prevState => {
      return { neutralValue: prevState.neutralValue + 1 };
    });
  };
  makeBadFeedback = () => {
    this.setState(prevState => {
      return { badValue: prevState.badValue + 1 };
    });
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        totalValue: this.state.goodValue + this.state.badValue + this.state.neutralValue + 1,
      };
    });
    console.log(this.state.goodValue + this.state.badValue + this.state.neutralValue + 1);
  };
  countPositiveFeedbackPercentage = () => {
    if (this.state.goodValue !== 0) {
      this.setState(prevState => {
        return {
          everageGoodValue:
            (100 / (this.state.goodValue + this.state.badValue + this.state.neutralValue + 1)) *
            (this.state.goodValue + 1),
        };
      });
    }

    console.log(
      100 /
        (this.state.goodValue + this.state.badValue + this.state.neutralValue + 1) /
        (this.state.goodValue + 0.000000000000000000000000000000000000000000001 + 1),
    );
    // console.log(this.state.goodValue);
  };
  render() {
    return (
      <div className="Feedback">
        <span className="FeedbackHeader">Please leave feedback</span>
        <div className="FeedbackControls">
          <button
            type="button"
            onClick={event => {
              this.makeGoodFeedback();
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={event => {
              this.makeNeutralFeedback();
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          >
            Neutral:
          </button>
          <button
            type="button"
            onClick={() => {
              this.makeBadFeedback();
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          >
            Bad
          </button>
        </div>
        <div className="FeedbackStatistics">
          <span className="FeedbackResults">Good: {this.state.goodValue}</span>
          <span className="FeedbackResults">Neutral: {this.state.neutralValue}</span>
          <span className="FeedbackResults">Bad: {this.state.badValue}</span>
        </div>
        <p>Total Feedbacks: {this.state.totalValue}</p>
        <p>Everage Good Values {this.state.everageGoodValue}%</p>
      </div>
    );
  }
}
export default Feedback;
