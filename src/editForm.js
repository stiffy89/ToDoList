import React from 'react';
import {
    TextField
} from '@material-ui/core';

function editForm (props)
{
    return (
        <TextField 
                placeholder = {props.placeHolder}
                fullWidth/>
    )
}

export default editForm;


//if we click on this item, it will toggle back to what it was before
//it should contain the value of what the to do was
//onChange() for when we change the value