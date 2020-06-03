import React ,{useState,useEffect,useRef}  from 'react';
import './teacher.css';
import { Form,Container,Col} from "react-bootstrap";
import GenericHeader from '../GenericHeader/GenericHeader';
import AppButtonSet from '../AppButtonSet';
import {store} from '../../store/store';
import axios from "axios";


function Teacher() {
  const [myState,setState] = useState({
                                       userName:'',
                                       firstNane:'',
                                       lastName:'',
                                       certifID:'',
                                       certDate:'',
                                       gradeLevel:'',
                                       subject:'',
                                       classRoomCount:'',
                                       billingual:'',
                                       Notes:'',
                                      })

  const userNameInput = useRef();
  const stateData = store.getState();
  const isLoggedIn = stateData.redLogin.userName !=='' ? true : false;

  useEffect(() => {
    console.log(" {Teacher} The login name.. " + stateData.redLogin.userName);
    userNameInput.current.focus();
    setState( {userName: stateData.redLogin.userName })  //do not use: setState({ ...myState, userName: stateData.redLogin.userName})}/ it will cause an infinite loop*
  },[stateData.redLogin.userName]);   //if this parameter was not included, I would not be able to go to other fields
     

  return (
    <div>
      State of logged in: {isLoggedIn.toString()}
    <Container>
      <Form>
        
      <Form.Group controlId="environment">
              <GenericHeader headertext="Teacher Information Screen" />
      </Form.Group>

        <Form.Group  controlId="userName">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="userName"
            ref={userNameInput}
            value={stateData.redLogin.userName}
            onChange={(e) => setState({ ...myState, userName: e.target.value })}
          />
        </Form.Group>
     
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstNane"
                onChange={(e) =>
                  setState({ ...myState, firstNane: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={(e) =>
                  setState({ ...myState, lastName: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Grade Level</Form.Label>
              <Form.Control
                as="select"
                type="select"
                name="gradeLevel"
                onChange={(e) =>
                  setState({ ...myState, gradeLevel: e.target.value })
                }
              >
                <option value="--select--">--select--</option>
                <option value="PREK">PREK</option>
                <option value="KIND">KIND</option>
                <option value="ELEM">ELEM</option>
                <option value="HIGH">HIGH</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Certificate #</Form.Label>
              <Form.Control
                type="text"
                placeholder="Certificate ID"
                name="certifID"
                onChange={(e) =>
                  setState({ ...myState, certifID: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Certificate Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Certificate Date"
                name="certDate"
                onChange={(e) =>
                  setState({ ...myState, certDate: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={(e) =>
                  setState({ ...myState, subject: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label># of Students</Form.Label>
              <Form.Control
                type="text"
                placeholder="# of Students"
                name="classRoomCount"
                onChange={(e) =>
                  setState({ ...myState, classRoomCount: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Billingual</Form.Label>
              <Form.Control
                as="select"
                type="select"
                name="billingual"
                onChange={(e) =>
                  setState({ ...myState, billingual: e.target.value })
                }
              >
                <option value="--select--">--select--</option>
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as = "textarea"
            rows = "5"
            type="text"
            placeholder="Enter Notes"
            name="Notes"
            onChange={(e) => setState({ ...myState, Notes: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <AppButtonSet
           writeRecordAction = {() => writeTeacherRecord(myState)} 
           access={!isLoggedIn}/>
        </Form.Group>
      
      </Form>
    </Container>
    </div>
  ); 
}



const writeTeacherRecord = async (teacherRecord) => {
  console.log(teacherRecord)
  return;  //will come back to this whe I want to write some more records
  axios
    .post(`https://traveltrackingdb.firebaseio.com/teacherRecords.json`, teacherRecord)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
    
};


Teacher.propTypes = {};

Teacher.defaultProps = {};



export default Teacher;
