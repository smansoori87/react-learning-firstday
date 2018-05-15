import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
