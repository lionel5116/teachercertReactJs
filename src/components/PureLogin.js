import React, {useState,useReducer } from 'react'
import { connect } from "react-redux";
import { Form, Container, Button } from "react-bootstrap";
import GenericHeader from './GenericHeader/GenericHeader';
import redLogin from '../reducers/redLogin';



export const LoginContext = React.createContext("")

function PureLogin() {
    //I AM USING STATE & SETSTATE AS NAME SEMANTICS (IT COULD BE CALLED ANYTHING****)
    const [myState,setState] = useState({userName:'',password:'',environment:''})

     const [myNewState,dispatch] = useReducer(redLogin,myState)

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
            <LoginContext.Provider 
             value={myState.userName}>
                <Button
                type="button"
                variant="warning"
                className="buttonMargin"
                //href="/Teacher"
                onClick={() => dispatch({
                                        type:'LOGIN_DATA',
                                        environment:myState.environment,
                                        userName:myState.userName,
                                        password:myState.password
                                        })}
              >
                Process
              </Button>
           </LoginContext.Provider>
             
            </Form.Row>
          </Form>
         <h4>State from Reducer Function-Use State{JSON.stringify(myNewState)}</h4>
      
        </Container>
      </div>
    );
}

const props = {
  userName: '',
  password: '',
  environment: '',
}; 

const handleLogin = (myPassedInState) =>{

  props.userName = myPassedInState.userName;
  props.password = myPassedInState.password;
  props.environment = myPassedInState.environment;
  //navigation.navigate("/Teacher");
 
  /*
  props.redLogin({
              userName: myPassedInState.userName,
              password: myPassedInState.password,
              environment: myPassedInState.environment 
            })
  */
}

PureLogin.defaultProps = {
  userName: '',
  password: '',
  environment: ''
}; 


/*
const mapStateToProps = state =>
{
    return {
        userName: props.userName,
        password: props.password,
        environment: props.environment
    };
}

const mapDispatchToProps = dispatch => {
  return {
      redLogin: (payload) => {
          console.log("Received " + payload.userName) ;
          dispatch({type: 'LOGIN_DATA',
                  userName: payload.userName,
                  password: payload.password,
                  environment: payload.environment
              });
                  
      }

  };
};
*/

//export default connect(mapStateToProps,mapDispatchToProps)(PureLogin);
export default PureLogin;
