import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

class axiosExample extends Component {
  state = {
    axiosRecs: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({ axiosRecs: res.data });
    });
  }

  render() {
    const { axiosRecs } = this.state;
    return (
      <Container style={myStyles.centerContainerContent}>
        <div>
          <h2>List of Axios Records</h2>
          {axiosRecs.length
            ? axiosRecs.map((axisRecord) => (
                <div key={axisRecord.id}>{axisRecord.title}</div>
              ))
            : null}
        </div>
      </Container>
    );
  }
}
const myStyles = {
  centerContainerContent: {
    "margintop": "70px",
    "alignself": "center",
  },
};
export default axiosExample;
