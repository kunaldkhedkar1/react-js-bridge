import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (<div>Hi</div>);
  }
}
export default App;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
