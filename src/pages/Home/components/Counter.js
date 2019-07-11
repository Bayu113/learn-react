import React, { Component, Fragment } from 'react'



class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    }
  }

  minusNumber = () => {
    this.setState({
      number: this.state.number - 1
    })
  }
  plusNumber = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <h2>counter app</h2>
          <div>
            <button onClick={this.minusNumber}>-</button>
            <b>{this.state.number}</b>
            <button onClick={this.plusNumber}>+</button>
          </div>
        </div>
      </Fragment>
    )
  }
}


export default Counter;