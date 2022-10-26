import React, { Component } from "react";
import Buttoms from "./Buttoms"
import ValueGood from "./ValueGood";
import ValueNeutral from "./ValueNeutral";
import ValueBad from "./ValueBad";


// import "./Counter.css";

class Counter extends Component {

//1. Статика
static defaultProps = {
    initialvalue: 0
};

//2. Состояние
  state = { value: this.props.initialvalue, 
};

// 3. Кастомные методы
  handlIncrementeGood = () => {
    // Замена относительно исходного состояния
    // this.setState({ value: 666})
  
    // Замена относительно текущего состояния
  this.setState(prevState => ({
        value: prevState.value + 1,
  }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
        value: prevState.value + 1,
    }));
    };

    handleIncrementBad = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
        };

// Рендер

  render() {
    const { value } = this.state;

    return (
        <section>
      <div className="Counter">
       <p> Please leave feedback</p>
       <Buttoms onIncrementGood={this.handlIncrementeGood} onIncrementNeutral={this.handleIncrementNeutral} onIncrementBad={this.handleIncrementBad} />
      </div>
    
      <div className="Counter">
      <p> Statistics</p>
      <ValueGood onValue={value}/>
      <ValueNeutral onValue={value}/>
      <ValueBad onValue={value}/>
      </div>



      </section>

    );
  }
}

export default Counter;
