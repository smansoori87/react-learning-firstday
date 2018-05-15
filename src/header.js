import React, { Component } from "react";

const headerStyle = {
  /* text-align:center;*/
};

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>React Workshop</h1>
          <nav>
            <a href="">Home</a>
            <a href="">Tasks</a>
            <a href="">Feedback</a>
          </nav>
        </header>
        <hr />
      </div>
    );
  }
}

export default Header;
