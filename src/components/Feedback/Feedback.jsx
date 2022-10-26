import React, { Component } from 'react';
import Buttoms from './Buttoms';
import ValueGood from './ValueGood';
import ValueNeutral from './ValueNeutral';
import ValueBad from './ValueBad';
import ValueTotal from './ValueTotal';
import ValuePersentage from './ValuePersentage';

// import "./Counter.css";

class Counter extends Component {
  //1. Статика
  static defaultProps = {
    initialvalue: 0,
  };

  //2. Состояние
  state = {
    valueGood: this.props.initialvalue,
    valueNeutral: this.props.initialvalue,
    valueBad: this.props.initialvalue,
    valueTotal: this.props.initialvalue,
    valuePercentage: this.props.initialvalue,
  };

  // 3. Кастомные методы
  handlIncrementeGood = () => {
    // Замена относительно исходного состояния
    // this.setState({ value: 666})

    // Замена относительно текущего состояния
    this.setState(prevState => ({
      valueGood: prevState.valueGood + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      valueNeutral: prevState.valueNeutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      valueBad: prevState.valueBad + 1,
    }));
  };


  // countTotalFeedback = () => {
  //   this.setState(prevState => ({
  //     valueTotal:
  //       (prevState.valueBad + 1)  + (prevState.valueNeutral + 1) + (prevState.valueGood + 1),
  //   }));
  // };

  // countPositiveFeedbackPercentage = () => {
  //   this.setState(prevState => ({
  //     valuePercentage:
  //       ((prevState.valueGood + 1) * 100) /
  //       ((prevState.valueBad + 1) + (prevState.valueNeutral + 1) + (prevState.valueGood+1)),
  //   }));
  // };


  // Рендер

  render() {
    // const {  valueGood } = this.state;
    // const {  valueNeutral } = this.state;
    const  valueTotal = this.state.valueGood +  this.state.valueNeutral + this.state.valueBad;
    const valuePercentage = Math.ceil((this.state.valueGood * 100) /  valueTotal);
  

    return (
      <section>
        <div className="Counter">
          <p> Please leave feedback</p>
          <Buttoms
            onIncrementGood={this.handlIncrementeGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
            // onIncrementTotal={this.countTotalFeedback}
            // onIncrementPersentage={this.countPositiveFeedbackPercentage}
          />
        </div>

        <div className="Counter">
          <p> Statistics</p>
          <ValueGood onValueGood={this.state.valueGood} />
          <ValueNeutral onValueNeutral={this.state.valueNeutral} />
          <ValueBad onValueBad={this.state.valueBad} />
          <ValueTotal onValueTotal={valueTotal} />
          <ValuePersentage onValuePersentage={valuePercentage? valuePercentage: 0} />
        </div>
      </section>
    );
  }
}

export default Counter;
