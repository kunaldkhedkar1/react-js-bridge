import React from 'react';
import ReactDOM from 'react-dom'

function ReactToJsBridge(components) {

  var render = function (component, props, targetNode, callback) {
    var ReactElement = React.cloneElement(component, props);
    ReactDOM.render(ReactElement, targetNode, callback);
    return ReactElement;
  }
  window.RCR = {components, render};
}
export default ReactToJsBridge;
