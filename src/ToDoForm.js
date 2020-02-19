import React from 'react';
import useInputState from'./Hooks/useInputState';

import {
    Paper,
    TextField
} from '@material-ui/core';

const ToDoForm = (props) => {

    const[value, handleChange, resetValue] = useInputState("");

    return (
        <Paper style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingLeft: "5px",
            paddingRight: "5px"

        }}>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.addNewItem(value);
                resetValue();
            }}>
                <TextField 
                    value={value} 
                    onChange={handleChange} 
                    margin="normal"
                    label="Add new to do"
                    fullWidth/>
            </form>
        </Paper>

    )

}

export default ToDoForm;