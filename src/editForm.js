import React from 'react';
import useInputState from './Hooks/useInputState';

import {
    TextField
} from '@material-ui/core';

const EditForm = (props) => {

    const[value, handleChange, resetValue] = useInputState(props.editItem.task);

    return (
        <form
            onSubmit = {(event) => {
                event.preventDefault();
                props.editFormSubmit(value, props.editItem.task);
                props.editFormToggle();
            }}
        >
            <TextField 
                value = {value}
                onChange = {handleChange}
                fullWidth
            />
        </form>
    )
}

export default EditForm;


//if we click on this item, it will toggle back to what it was before
//it should contain the value of what the to do was
//onChange() for when we change the value