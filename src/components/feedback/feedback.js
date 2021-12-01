import React from 'react';

class Feedback extends React.Component {
  //
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
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
  render() {
    return (
      <div className="Feedback">
        <span className="FeedbackHeader">Please leave feedback</span>
        <div className="FeedbackControls">
          <button
            type="button"
            onClick={event => {
              this.makeGoodFeedback();
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={event => {
              this.makeNeutralFeedback();
            }}
          >
            Neutral:
          </button>
          <button
            type="button"
            onClick={() => {
              this.makeBadFeedback();
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
      </div>
    );
  }
}
export default Feedback;
