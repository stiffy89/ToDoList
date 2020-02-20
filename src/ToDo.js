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

import EditForm from './editForm';


const ToDo = (props) => {

    const [toggleVal, setToggleVal] = useToggleState(false);
    const [editStatus, setEditStatus] = useToggleState(false);

    const toDoOnClick = () => {
        setToggleVal(!toggleVal);
    }

    const editToDo = () => {
        setEditStatus(!editStatus);
    }

    //pass through this to see whether
    //if we render a textfield or a to do
    const editObject = (props) => {

        if (editStatus)
        {
            return (
                <ListItem>
                    <EditForm editItem = {props} editFormSubmit = {props.editFormSubmit} editFormToggle = {editToDo}  />
                </ListItem>
            )
        }
        else 
        {
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
                            <EditIcon onClick = {() => editToDo()}/>
                        </IconButton>

                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick = {() => props.deleteClicked(props.task)}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )
        }
    }



    return (
        <>
        {editObject(props)}
        </>
    )

}

export default ToDo