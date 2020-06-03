import React from "react";
import {ListGroup,Form,Container} from 'react-bootstrap';
import uniqueid from 'uniqid'
import axios from 'axios';

class HcadData extends React.Component {

  state = {
    axiosRecs: [],
    done: false
  }

  //this is using my ljonesalesforce.com firebase database (Realtime Database)
  componentDidMount() {
          axios.get(`https://traveltrackingdb.firebaseio.com/hcadrecs.json`)
          .then(res => {

            let lstHcadRecordData = [];
            lstHcadRecordData = res.data
           
            let HcadRecords = lstHcadRecordData.map(hcadRecItem =><ListGroup.Item key={uniqueid()} 
              action  onClick={() => this.selectHcadRecordItem(hcadRecItem.AcctNumb)}>
               Acct#: {hcadRecItem.AcctNumb} <br /> 
               Owner Name: {hcadRecItem.OwnerName}  <br /> 
               Final Value: {hcadRecItem.FinalValue } <br /> 
               LUC: {hcadRecItem.LUC} 
              </ListGroup.Item>)

             this.setState({
                    axiosRecs: HcadRecords,
                     done: true
                    });
          });
  }

  selectHcadRecordItem=(AcctNumb) =>
  {
     alert("Account Number for this record :" + AcctNumb)
  }

  render() {
      if(!this.state.done) {
          return (
              <div>
                  HCAD Records Loading .....
              </div>
          )
      } else {
          return (
            <div id="MasterContainer">
              <Container>
                <h1>HCAD Records</h1>
                <Form>
                  <Form.Group controlId="spacer">
                    <hr></hr>
                  </Form.Group>

                  <Form.Group controlId="HcadList">
                    <ListGroup>{this.state.axiosRecs}</ListGroup>
                  </Form.Group>
                </Form>
              </Container>
            </div>
          );
      }
  }
}

export default HcadData;