import React  from "react";
import "./login.css";

import { Form, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Reusablebutton from "../../components/reusablebutton/reusablebutton";
//import Logger from "../../components/logger/logger";
import GenericHeader from "../../components/GenericHeader/GenericHeader";


class Login extends React.Component {
  state = {
    userName: "",
    password: "",
    environment: "--select--",
  };

  render() {
    return (
      <div id="MasterContainer">
        <Container className="centerContainerContent col-md-3">
          <Form>
            <Form.Group controlId="environment">
              <GenericHeader headertext="Awesome Login Screen" />
            </Form.Group>

            <Form.Group controlId="environment">
              <Form.Label>Select Environment</Form.Label>
              <Form.Control
                as="select"
                type="select"
                name="environment"
                onChange={(e) => {
                  this.handleTextChange(e);
                }}
              >
                <option value="--select--">--select--</option>
                <option value="local">local</option>
                <option value="prod">prod</option>
              </Form.Control>
              <div></div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="userName"
                onChange={(e) => {
                  this.handleTextChange(e);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  this.handleTextChange(e);
                }}
              />
            </Form.Group>
            <Form.Row>
              <Reusablebutton
                variant="primary"
                text="Login"
                myclickHandler = {() =>this.proceedToTeacher('Hello My Man')}
              ></Reusablebutton>
              <Button
                type="button"
                variant="warning"
                className="buttonMargin"
                onClick={() =>this.showLoginDetailsScreen()}
              >
                Test HOC/Redux
              </Button>
                <Button
                type="button"
                variant="primary"
                className="buttonMargin"
                onClick={() =>this.goToBootStrapScreen()}
              >
                Bootstrap Table
              </Button>
            </Form.Row>
          </Form>
        </Container>
      </div>
    );
  }



  handleTextChange = async function (event) {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    await this.setState({ [fieldName]: fleldVal });
  };

  proceedToTeacher = (somePassedInformation) => {
   this.props.dispatch({
    type: "LOGIN_DATA",
    userName: this.state.userName,
    password: this.state.password,
    environment: this.state.environment
  })

 
    this.props.history.push("/Teacher");
  };

  showLoginDetailsScreen = () => {
    this.props.dispatch({
      type: "LOGIN_DATA",
      userName: this.state.userName,
      password: this.state.password,
      environment: this.state.environment
    })
    this.props.history.push("/LoginDetails");
  }
    
  goToBootStrapScreen =() =>
  {
    this.props.history.push("/BootstrapTableExample");
  }
  
}



//THIS IS HOC, YOU ARE WRAPPING YOUR COMPONENT WITH REDUX, THE CONNECT
//ALLOWS THIS COMPONENT TO INHERIT PROPERTIES FROM THE REDUX STORE
export default connect(null,null)(Login);
