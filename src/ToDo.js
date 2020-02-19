import React from 'react';

import {
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider,
    Checkbox,
    IconButton,
    ListItemSecondaryAction
    
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './Hooks/useToggleState';


const ToDo = (props) => {

    const [toggleVal, setToggleVal] = useToggleState(false);

    const toDoOnClick = () => {
        setToggleVal(!toggleVal);
        console.log(toggleVal);
    }

    return (
        <ListItem>
            <Checkbox tabIndex={-1}  checked = {props.completed} onClick={() => {props.checked(props.task); toDoOnClick();}}/>
            <ListItemText style = {{
                textDecoration: props.completed ? "line-through" : "none"
            }}>
                
                {props.task}

            </ListItemText>
                
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit">
                        <EditIcon/>
                    </IconButton>

                    <IconButton aria-label="Delete">
                        <DeleteIcon onClick = {() => props.clicked(props.task)}/>
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    )

}

export default ToDo