import React, { Component } from "react";

const plus = {
  marginLeft: "10px"
};

const totalVal = {
  marginLeft: "10px"
};

const minus = {
  marginLeft: "10px"
};

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.defaultCount
    };

    this.increaseValue = this.increaseValue.bind(this);
    this.decreaseValue = this.decreaseValue.bind(this);
  }

  increaseValue() {
    this.setState({
      total: this.state.total + 1
    });
  }

  decreaseValue() {
    this.setState({
      total: this.state.total - 1
    });
  }

  render() {
    const courceData = this.props.myCources.map(function(element, index) {
      return <li key={index}>{element}</li>;
    });
    return (
      <div>
        <h1>Details of Body, from detail component.</h1>
        <p>{this.props.title}</p>
        <ul>{courceData}</ul>

        <h3>State Introduction</h3>
        <span style={plus} onClick={this.increaseValue}>
          +
        </span>
        <span style={totalVal}>{this.state.total}</span>
        <span style={minus} onClick={this.decreaseValue}>
          -
        </span>
      </div>
    );
  }
}

export default Details;
