import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  
   };

keys = Object.keys(this.state)


leaveFeedback = e => {
  const comande = e.target.name

  this.setState({
    [comande]: this.state[comande] + 1,
});
};


countTotalFeedback = () => {
  const valueTotal = this.state.good + this.state.neutral + this.state.bad;
  return valueTotal
};

countPositiveFeedbackPercentage = () => {

   const valuePercentage = Math.ceil((this.state.good * 100) / this.countTotalFeedback());
   return valuePercentage
};

  // Рендер

  render() {

    return (
      <>
        <Section title="Please leave feedback:">
          <FeedbackOptions
               options={this.keys} onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics:">
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            valueGood={this.state.good}
            valueNeutral={this.state.neutral}
            valueBad={this.state.bad}
            valueTotal={this.countTotalFeedback()}
            valuePercentage={this.countPositiveFeedbackPercentage()}
          />) : <Notification title="There is no feedback!!!"/>}
        </Section>
      </>
    );
  }
}

export default App;
