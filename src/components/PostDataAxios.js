import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";

export class postDataAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  render() {
    const { userId, title, body } = this.state;
    return (
      <Container style={myStyles.centerContainerContent}>
        <div>
          <h2>Post some Data</h2>
          <Form>
            <Form.Group>
              <Form.Label>Enter User ID</Form.Label>
              <Form.Control
                type="text"
                value={userId}
                placeholder="Enter UserID"
                name="userId"
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter User ID"
                name="title"
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter Body Information</Form.Label>
              <Form.Control
                type="text"
                value={body}
                placeholder="Enter Body"
                name="body"
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Button
              type="button"
              variant="warning"
              onClick={this.submitHandler}
            >
              Process
            </Button>
          </Form>
        </div>
      </Container>
    );
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

const myStyles = {
  centerContainerContent: {
    margintop: "70px",
    alignself: "center",
  },
};

export default postDataAxios;
