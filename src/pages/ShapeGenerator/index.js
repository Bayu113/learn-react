import React, { Component } from 'react'
import './index.css'

class ShapeGenerator extends Component {

  constructor() {
    super()
    this.state = {
      shape: 'square',
      color: 'red',
      width: '',
      height: '',
      amount: '',
      isGenerated: false,
    }

  }

  setWidthChange = e => {
    this.setState({ width: e.target.value })
  }
  setHeightChange = e => {
    this.setState({ height: e.target.value })
  }
  setAmountChange = e => {
    this.setState({ amount: e.target.value })
  }



  setShapeChange = e => {
    this.setState({ shape: e.target.value });
  }

  setColorChange = e => {
    this.setState({ color: e.target.value });
  }

  setGenerate = () => {
    var isShowing = this.state.isGenerated;
    this.setState({ isGenerated: !isShowing });
  };



  render() {

    const shapes = []

    if (this.state.shape === "square") {
      let i;
      for (i = 0; i < this.state.amount; i++) {
        shapes.push(<div className="square" style={{ width: parseInt(this.state.width), height: parseInt(this.state.height), backgroundColor: this.state.color }}>  </div>)
      }
    }
    else if (this.state.shape === "circle"){
      let i;
      for (i = 0; i < this.state.amount; i++) {
        shapes.push(<div className="circle" style={{ width: parseInt(this.state.width), height: parseInt(this.state.height), backgroundColor: this.state.color }}>  </div>)
      }
    }


    return (
      <div>
        <h1>The shape generator</h1>
        <label htmlFor="shapeId">Shape
        <select name="" id="" onChange={this.setShapeChange} value={this.state.shape} >
            <option value="square">Square</option>
            <option value="circle">Circle</option>
          </select>
        </label>
        <label htmlFor="colorId">Color
        <select name="" id="" onChange={this.setColorChange} value={this.state.color}>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
          </select>
        </label>
        <label htmlFor="sizeId">
          size
          <input style={{ width: 55 }} type="number" min="0" value={this.state.width} onChange={this.setWidthChange} />x
          <input style={{ width: 55 }} type="number" min="0" value={this.state.height} onChange={this.setHeightChange} />
        </label>
        <label htmlFor="amountId">
          amount
          <input style={{ width: 55 }} type="number" min="0" value={this.state.amount} onChange={this.setAmountChange} />
        </label>


        <button className="generate-button"
          disabled={this.state.shape === '' || this.state.color === '' || this.state.height === '' || this.state.width === '' || this.state.amount === ''}
          onClick={this.setGenerate} >Generate Shape</button>
        <div>{this.state.isGenerated && shapes}</div>


      </div>
    );
  }
}




export default ShapeGenerator