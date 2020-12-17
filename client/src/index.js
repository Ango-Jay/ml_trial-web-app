import React from "react";
import ReactDOM from "react-dom";
//import registerServiceWorker from './registerServiceWorker'
//import Counters from "./components/counters";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//const element = <h1>Hello World</h1>;
//console.log(element);
//ReactDOM.render(<Counters />, document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
