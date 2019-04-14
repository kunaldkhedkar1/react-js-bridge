import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'


var components = {
  App: <App/>,
}
var render = function(component, props, targetNode, callback) {
  var ReactElement = React.cloneElement(component, props);
  ReactDOM.render(ReactElement , targetNode, callback);
  return ReactElement;
}
window.RCR = {components,render};
export default render;
