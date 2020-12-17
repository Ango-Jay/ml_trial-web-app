import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

//import AppNavBar from "./components/tutorial/component/appNavBar";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./main";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <NavBar />
          <Main />
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
