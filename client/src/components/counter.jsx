import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value,
    //imageUrl: "srccomponentsKidWithLightningInABottle.jpg",
  };
  styles = {
    margin: 10,
    backgroundColor: "yellow",
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  decreaseIncrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          className="btn"
          onClick={this.handleIncrement}
          style={this.styles}
        >
          Increase
        </button>
        <button
          className="btn"
          onClick={this.decreaseIncrement}
          style={this.styles}
        >
          Decrease
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
