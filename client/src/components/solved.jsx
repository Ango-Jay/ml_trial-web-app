import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getScore } from "../actions/scoreActions";
import PropTypes from "prop-types";
import "./solved.css";
import "./tutorial/shoppingList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Solved extends Component {
  loading = () => {
    while (this.props.loading === true) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    }
    return this.props.score.score;
  };
  SaveFile = () => {
    while (this.props.loading === true) {
      return <h3 className="text-center mt-5">Your Model is being fitted</h3>;
    }
    return (
      <div>
        <TransitionGroup>
          <CSSTransition key={3} timeout={500} classNames="fade">
            <div>
              <h3 className="text-center mt-5">
                Do you want to save your predictions?
              </h3>
              <div className="text-center mt-2">
                <button className="btn btn-primary btn-small text-center">
                  Save
                </button>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  };

  componentDidMount() {
    this.props.getScore();
  }
  render() {
    return (
      <div>
        <Container style={{ margin: "auto", width: "50%" }}>
          <h3 style={{ display: "block", textAlign: "center" }}>
            Your model score is:
          </h3>
          <br />
          <CSSTransition key={4} timeout={500} classNames="fade">
            <h1 style={{ fontSize: "100px", textAlign: "center" }}>
              {this.loading()}
            </h1>
          </CSSTransition>

          {this.SaveFile()}
        </Container>
      </div>
    );
  }
}

Solved.propTypes = {
  score: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getScore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.reducerScore.score,
  loading: state.reducerScore.loading,
});

export default connect(mapStateToProps, {
  getScore,
})(Solved);
