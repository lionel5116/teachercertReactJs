import React from 'react'
import { Button } from 'react-bootstrap'

function AppButtonSet(props) {
    return (
        <div>
           <Button
             variant="primary"
             href="/"
           >
           Login Screen
           </Button> 
           <Button
             variant="warning"
             onClick={props.writeRecordAction}
             style={mystyles.buttonPadLeft}
           >
            Submit
           </Button> 
        </div>
    )
}

const mystyles = {
    buttonPadLeft: {
        marginLeft: '5px'
    },
}

export default AppButtonSet
