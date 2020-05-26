import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

function FetchDataPureFunction() {
  const [axiosRecs, setAxiosRecords] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setAxiosRecords(res.data);
    });
  },[]);

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

const myStyles = {
  centerContainerContent: {
    margintop: "70px",
    alignself: "center",
  },
};
export default FetchDataPureFunction;
