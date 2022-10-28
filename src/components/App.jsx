import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';


class App extends Component {
  //1. Статика
  static defaultProps = {
    initialvalue: 0,
    inicialvisible: false,
  };

  //2. Состояние
  state = {
    valueGood: this.props.initialvalue,
    valueNeutral: this.props.initialvalue,
    valueBad: this.props.initialvalue,
    valueTotal: this.props.initialvalue,
    valuePercentage: this.props.initialvalue,
    visible: this.props.inicialvisible,
  };

  //  3. Кастомные методы
  handlIncrementeGood = () => {
    //     // Замена относительно исходного состояния
    //     // this.setState({ value: 666})

    //     // Замена относительно текущего состояния
    this.setState(prevState => ({
      valueGood: prevState.valueGood + 1,
      visible: !prevState.visible? !prevState.visible: prevState.visible,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      valueNeutral: prevState.valueNeutral + 1,
      visible: !prevState.visible? !prevState.visible: prevState.visible ,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      valueBad: prevState.valueBad + 1,
      visible: !prevState.visible? !prevState.visible: prevState.visible ,
    }));
  };



  // Рендер

  render() {
    const valueTotal =
      this.state.valueGood + this.state.valueNeutral + this.state.valueBad;
    const valuePercentage = Math.ceil(
      (this.state.valueGood * 100) / valueTotal
    );
    const { visible } = this.state

    return (
      <>
        <Section title="Please leave feedback:">
          <FeedbackOptions
            onIncrementGood={this.handlIncrementeGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
          />
        </Section>

        <Section title="Statistics:">
        {visible ? (
          <Statistics
            valueGood={this.state.valueGood}
            valueNeutral={this.state.valueNeutral}
            valueBad={this.state.valueBad}
            valueTotal={valueTotal}
            valuePercentage={valuePercentage}
          />) : <Notification title="There is no feedback!!!"/>}
        </Section>
      </>
    );
  }
}

export default App;
