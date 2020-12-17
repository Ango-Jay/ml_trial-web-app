import React, { Component } from "react";
import ShoppingList from "./component/shoppingList";
import ItemModal from "./component/itemModal";
import Container from "reactstrap/lib/Container";

class TutorialApp extends Component {
  state = {};
  render() {
    return (
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    );
  }
}

export default TutorialApp;
