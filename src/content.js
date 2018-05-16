import React, { Component } from "react";

import Details from "./details";

let cources = ["Java", "Hadoop", "Micro Services"];

class Content extends Component {
  render() {
    return (
      <div>
        <h1>Body</h1>
        <Details title="Cources Title" myCources={cources} defaultCount={9} />
      </div>
    );
  }
}

export default Content;
