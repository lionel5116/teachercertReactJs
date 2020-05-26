import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

function FetchDataPureFunction() {
  //const [axiosRecs, setAxiosRecords] = useState([]);  //use this when you want to render more than one item
  const [axiosRecs, setAxiosRecord] = useState({});
  const [id, setId] = useState(1);

  /*
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setAxiosRecords(res.data);
    });
  },[]);
 */
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setAxiosRecord(res.data);
      });
  }, [id]);

  return (
    <Container style={myStyles.centerContainerContent}>
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
      </div>
      <div>
        <h2>List of Axios Record(s)</h2>
        {axiosRecs.length ? (
          axiosRecs.map((axisRecord) => (
            <div key={axisRecord.id}>{axisRecord.title}</div>
          ))
        ) : (
          <div>{axiosRecs.title}</div>
        )}
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
