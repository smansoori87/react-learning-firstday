import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
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
      </div>
    );
  }
}

export default Details;
