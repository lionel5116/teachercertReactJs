import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

//****function names for pure components needs to have a capital letter
function FetchDataPureFunction() {
  //const [axiosRecs, setAxiosRecords] = useState([]);  //use this when you want to render more than one item
  const [axiosRecs, setAxiosRecord] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(5);

  const handleClick = () => {
    setIdFromButtonClick(id);
  }
  /*
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setAxiosRecords(res.data);
    });
  },[]);
 */

 /*
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setAxiosRecord(res.data);
      });
  }, [id]);
*/

useEffect(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then((res) => {
      console.log(res.data);
      setAxiosRecord(res.data);
    });
}, [idFromButtonClick]);

  return (
    <Container style={myStyles.centerContainerContent}>
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <Button
         type="button"
          variant="warning"
           style={myStyles.addPaddingleftforButton}
           onClick={handleClick}
         >
          Fetch Via Button Click
        </Button>
      </div>
      <div>
        <h2>List of Axios Record(s)</h2>
        {axiosRecs.length ? (
          axiosRecs.map((axisRecord) => (
            <div key={axisRecord.id}>{axisRecord.title}</div>
          ))
        ) : (
          <div>{axiosRecs.body}</div>
        )}
      </div>
    </Container>
  );

  
}


const myStyles = {
  centerContainerContent: {
    margintop: '70px',
    alignself: 'center',
  },
  addPaddingleftforButton: {
    marginLeft: '2px'
  }
};
export default FetchDataPureFunction;
