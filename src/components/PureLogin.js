import React, {useState } from 'react'
import { connect } from "react-redux";
import { Form, Container, Button } from "react-bootstrap";
import GenericHeader from './GenericHeader/GenericHeader';

//****function names for pure components needs to have a capital letter
function PureLogin() {

    //I AM USING STATE & SETSTATE AS NAME SEMANTICS (IT COULD BE CALLED ANYTHING****)
    const [myState,setState] = useState({userName:'',password:'',environment:''})

    return (
        <div id="MasterContainer">
        <Container className="centerContainerContent col-md-3">
          <Form>
            <Form.Group controlId="environment">
              <GenericHeader headertext="Pure Function Login Screen" />
            </Form.Group>

            <Form.Group controlId="environment">
              <Form.Label>Select Environment</Form.Label>
              <Form.Control
                as="select"
                type="select"
                name="environment"
                onChange={e => setState({...myState,environment:e.target.value})}
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
                onChange={e => setState({...myState,userName:e.target.value})}
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
                onChange={e => setState({...myState,password:e.target.value})}
              />
            </Form.Group>
            <Form.Row>
              <Button
                type="button"
                variant="warning"
                className="buttonMargin"
              >
                Process
              </Button>
            </Form.Row>
          </Form>
       <h4>{JSON.stringify(myState)}</h4>
        </Container>
      </div>
    );
}


const mapStateToProps = (state) =>
{
    return {
        userName: state.userName,
        password: state.password,
        environment: state.environment
    };
}

export default connect(mapStateToProps)(PureLogin);
