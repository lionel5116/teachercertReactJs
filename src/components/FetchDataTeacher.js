import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ListGroup, Form, Container } from "react-bootstrap";
import uniqueid from "uniqid";

let lstTeacherData = [];
let myTestArray = [];

function FetchDataTeacher() {
  const [axiosRecs, setAxiosRecords] = useState([]);

  useEffect(() => {
    axios
      .get(`https://traveltrackingdb.firebaseio.com/teacherRecords.json/`)
      .then((res) => {
        //https://www.youtube.com/watch?v=NcewaPfFR6Y
        //https://stackoverflow.com/questions/40250139/push-object-into-array
        var _teacherListGroupItems = [];
        var _data = res.data;
        var keys = Object.keys(_data); //get keys
        for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
         
         var obj = {};
         obj["userName"] = _data[k].userName;
         obj["firstNane"] =   _data[k].firstNane;
         obj["lastName"] =  _data[k].lastName;
         obj["certifID"]  = _data[k].certifID;
         obj["certDate"] = _data[k].certDate;
         obj["gradeLevel"] = _data[k].gradeLevel;
         obj["subject"] = _data[k].subject;
         obj["classRoomCount"] = _data[k].classRoomCount;
         obj["billingual"] = _data[k].billingual;
         obj["Notes"] = _data[k].Notes;
          myTestArray.push(k)
          lstTeacherData = [...lstTeacherData,obj]
          //lstTeacherData.push(obj)
        }
       
        _teacherListGroupItems = lstTeacherData.map((teacherRecItem) => (
          <ListGroup.Item
            key={uniqueid()}
            action
            onClick={() => selectTeacherRecordItem(teacherRecItem.userName)}
          >
            TeacherID #: {teacherRecItem.userName} <br />
            First Name: {teacherRecItem.firstNane} <br />
            Last Name: {teacherRecItem.lastName} <br />
            certif ID#: {teacherRecItem.certifID} <br />
            Grade Level: {teacherRecItem.gradeLevel} <br />
          </ListGroup.Item>
        ));
        setAxiosRecords(_teacherListGroupItems);
      });
  }, []);

  const selectTeacherRecordItem = (userName) => {
    alert("Hello." + userName);
  };

  return (
    <div>
      <Container>
        <h1>Teacher Records</h1>
        <Form>
          <Form.Group controlId="spacer">
            <hr></hr>
          </Form.Group>

          <Form.Group>
            <ListGroup>{axiosRecs}</ListGroup>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default FetchDataTeacher;
