// React.
import React from "react";
import ReactDOM from "react-dom";

// Redux.
import { Provider } from "react-redux";
import store from "./store";

// Custom Containers.
import App from "./containers/App";

// Styles.
import GlobalStyle from "./utils/globals";

// Service Workers.
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
