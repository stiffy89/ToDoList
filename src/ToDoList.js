import React from 'react';

import {
    Paper,
    List,
    Divider
} from '@material-ui/core';

import ToDo from './ToDo';

function ToDoList(props) 
{
    console.log(props);

    if (props.todos.length > 0)
    {
        return (
            <Paper>
                <List>
                    {props.todos.map( todoItem => (
                        <>
                        <ToDo task ={todoItem.task} 
                          key={todoItem.id} 
                          completed={todoItem.completed} 
                          deleteClicked ={props.deleteClicked} 
                          editFormSubmit = {props.editFormSubmit}
                          checked={props.checked}/>
                        <Divider/>
                        </>
                    ))}
                </List>
            </Paper> 
        )
    }
    else 
    {
        return null;
    }
}

export default ToDoList;