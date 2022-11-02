import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';


class App extends Component {
  //1. Статика
  // static defaultProps = {
  //   initialvalue: 0,
  //   // inicialvisible: false,
  // };

  //2. Состояние
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  
   };

keys = Object.keys(this.state)

visible = false 

  // //  3. Кастомные методы
  // handlIncrementeGood = () => {
  //   //     // Замена относительно исходного состояния
  //   //     // this.setState({ value: 666})

  //   //     // Замена относительно текущего состояния
  //   this.setState(prevState => ({
  //     valueGood: prevState.good + 1,
  //     visible: !prevState.inicialvisible? !prevState.inicialvisible: prevState.inicialvisible,
  //   }));
  // };

  // handleIncrementNeutral = () => {
  //   this.setState(prevState => ({
  //     valueNeutral: prevState.neutral + 1,
  //     visible: !prevState.inicialvisible? !prevState.inicialvisible: prevState.inicialvisible,
  //   }));
  // };

  // handleIncrementBad = () => {
  //   this.setState(prevState => ({
  //     valueBad: prevState.bad + 1,
  //     visible: !prevState.inicialvisible? !prevState.inicialvisible: prevState.inicialvisible,
  //   }));
  // };

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



    // const valueTotal =
    //   this.state.good + this.state.neutral + this.state.bad;

    // const valuePercentage = Math.ceil(
    //   (this.state.good * 100) / valueTotal
    // );
  

    // const options = Object.keys(this.state)

    return (
      <>
        <Section title="Please leave feedback:">
          <FeedbackOptions
               options={this.keys} onLeaveFeedback={this.leaveFeedback}
            // onIncrementGood={this.handlIncrementeGood}
            // onIncrementNeutral={this.handleIncrementNeutral}
            // onIncrementBad={this.handleIncrementBad}
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
