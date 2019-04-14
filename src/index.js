import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'


var components = {
  'App': <App/>,
}
// var nodes = [];
var render = function(component, props, targetNode, callback) {
  var ReactElement = React.cloneElement(components[component], props);
  console.log('element', ReactElement)
  // let Cmp =  components[component]
  ReactDOM.render(ReactElement , targetNode, callback);
  // nodes.push(targetNode);
  return App;
}
window.renderApp = render;
export default render;
