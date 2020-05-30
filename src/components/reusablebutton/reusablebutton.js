import React from 'react';
import './reusablebutton.css';
import {Button} from 'react-bootstrap';


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
