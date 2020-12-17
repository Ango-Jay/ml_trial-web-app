import React, { Component } from "react";
import logo from "../logo.svg";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class Form extends Component {
  state = {};
  // uploadImage = (e) => {
  // e.preventDefault();
  // };
  render() {
    return (
      <Container>
        <img
          src={logo}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "30%",
          }}
          alt="example placeholder"
        />

        <form
          className="md-form"
          action="http://localhost:5000/api/py/upload"
          method="POST"
          encType="multipart/form-data"
        >
          <Container>
            <div className="text-center mt-2">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <button
                      style={{ backgroundColor: "#45F", color: "white" }}
                      type="submit"
                    >
                      Upload
                    </button>
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    name="pyForm"
                    accept=".csv"
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose file
                  </label>
                </div>
              </div>
            </div>
          </Container>
        </form>
      </Container>
    );
  }
}

export default Form;
