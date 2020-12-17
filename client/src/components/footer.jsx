import React, { Component } from "react";
import { Container } from "reactstrap";
class Footer extends Component {
  state = {};
  style = {
    backgroundColor: "#343a40",
  };
  render() {
    return (
      <React.Fragment>
        <footer
          style={this.style}
          className="page-footer font-small pt-4 fixed-bottom "
        >
          <Container>
            <h5 align="center" style={{ color: "white" }}>
              © 2020 Copyright: MDBootstrap.com
            </h5>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
