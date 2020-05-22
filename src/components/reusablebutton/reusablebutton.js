import React from 'react';
import './reusablebutton.css';
import {Button} from 'react-bootstrap';


/*
const Reusablebutton = ({
  text,
  variant,
}) => {
   const someCallBackMethod = async() => { alert("hola from callback method!!!!");}
   return (
    <div className="reusablebutton">
    <Button variant={variant} type="button"
     onClick={someCallBackMethod}
    >
     {text}
    </Button>
  </div>
   )
};
Reusablebutton.defaultProps = {
   text:"Hello World",
   variant:"warning",
};
*/

function Reusablebutton(props) {
   return (
      <div>
         <Button 
           variant={props.variant}
           onClick={props.myclickHandler}>{props.text}</Button>
      </div>
   )
}


export default Reusablebutton;
