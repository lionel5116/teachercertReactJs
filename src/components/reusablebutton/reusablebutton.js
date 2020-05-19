import React from 'react';
import './reusablebutton.css';
import {Button} from 'react-bootstrap';

const Reusablebutton = ({
   text,
   variant
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
Reusablebutton.defaultProps = {};
export default Reusablebutton;
