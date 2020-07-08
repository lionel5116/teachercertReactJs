import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Container } from "react-bootstrap";

export class logindetails extends Component {

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="environment">
              <h2>Login Screen Details for {this.props.userName}</h2>
            </Form.Group>

            <Form.Group controlId="environment">
              <Form.Label>environment</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
              
                name="environment"
                value={this.props.environment}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
               
                name="userName"
                value={this.props.userName}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={this.props.password}
              />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.redLogin.userName,
    password: state.redLogin.password,
    environment: state.redLogin.environment,
  };
};

export default connect(mapStateToProps, null)(logindetails);
