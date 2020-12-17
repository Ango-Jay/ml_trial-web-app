import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/form";
import Solved from "./components/solved";
import TutorialApp from "./components/tutorial/tutorialApp";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/solved" component={Solved} />
        <Route exact path="/tutorial" component={TutorialApp} />
      </Switch>
    </main>
  );
};

export default Main;
