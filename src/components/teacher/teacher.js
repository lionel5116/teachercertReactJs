import React ,{useContext} from 'react';
import './teacher.css';
import {LoginContext} from "../../components/PureLogin";

function Teacher() {
  const loginContext = useContext(LoginContext)
  return (
   <div className="teacher">
    {loginContext}
  </div>
) 
}

Teacher.propTypes = {};

Teacher.defaultProps = {};

export default Teacher;
