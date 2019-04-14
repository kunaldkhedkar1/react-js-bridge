import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route, Link } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './js/reducers'
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import actionWatcher from './js/sagas'
import { loadState, saveState } from './js/localStorage'



var persitedState = loadState();
var initialState = persitedState !== undefined ? persitedState : defaultState;

var sagaMiddleWare = createSagaMiddleware();
var store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleWare)
);

// store.subscribe(() => {
//   let state = store.getState();

// })
sagaMiddleWare.run(actionWatcher)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        {/* <ThemeProvider> */}
            <Header />
            <Route path="/" exact component={Index} />
        {/* </ThemeProvider> */}
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
