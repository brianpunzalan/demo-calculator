import React from 'react'
import './style.scss'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      memoryValue: null,
      operation: 'default'
    }
  }

  clear = () => {
    this.setState({ value: 0, memoryValue: null, operation: 'default' })
  }

  handleNumClick = (number) => (e) => {
    if (this.state.operation === 'default') {
      this.setState((state, props) => {
        let oldValue = String(state.value);
        return {
          value: state.value === 0 ? number : oldValue.concat(number)
        }
      })
    } else {
      this.setState((state, props) => {
        let oldValue = String(state.value);
        return {
          value: state.value === 0 ? number : oldValue.concat(number),
        }
      })
    }
  }

  handleOperationClick = (operation) => (e) => {
    this.setState((state, props) => {
      return {
        value: 0,
        memoryValue: state.value,
        operation
      }
    })
  }

  calculate = (e) => {
    if (this.state.memoryValue === null) return;

    let calculatedAmount = null;
    switch(this.state.operation) {
      case 'add':
        calculatedAmount = Number(this.state.value) + Number(this.state.memoryValue);
        break;
      case 'minus':
        calculatedAmount = Number(this.state.value) - Number(this.state.memoryValue);
        break;
      case 'multiply':
        calculatedAmount = Number(this.state.value) * Number(this.state.memoryValue);
        break;
      case 'divide':
        calculatedAmount = Number(this.state.memoryValue) / Number(this.state.value);
        break;
      default:
        break;
    }

    this.setState({
      value: calculatedAmount,
      memoryValue: null,
      operation: 'default'
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="calculator">
        <div className="screen">
          <p>{this.state.value}</p>
        </div>
        <div className="body">
          <div className="numpad">
            <button onClick={this.handleNumClick(9)}>9</button>
            <button onClick={this.handleNumClick(8)}>8</button>
            <button onClick={this.handleNumClick(7)}>7</button>
            <button onClick={this.handleNumClick(6)}>6</button>
            <button onClick={this.handleNumClick(5)}>5</button>
            <button onClick={this.handleNumClick(4)}>4</button>
            <button onClick={this.handleNumClick(3)}>3</button>
            <button onClick={this.handleNumClick(2)}>2</button>
            <button onClick={this.handleNumClick(1)}>1</button>
            <button onClick={this.handleNumClick(0)}>0</button>
          </div>
          <div className="operations">
            <button onClick={this.clear}>C</button>
            <button onClick={this.handleOperationClick('add')}>+</button>
            <button onClick={this.handleOperationClick('minus')}>-</button>
            <button onClick={this.handleOperationClick('multiply')}>x</button>
            <button onClick={this.handleOperationClick('divide')}>/</button>
            <button onClick={this.calculate}>=</button>
          </div>
        </div>
      </div>
    )
  }
}