import React, {useState, useEffect} from 'react';

import {
    Paper,
    AppBar,
    Toolbar,
    Typography,
    Grid
} from '@material-ui/core';


import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import useTodoState from './Hooks/useTodoState';


function ToDoApp() {

    const initialToDo = [{id: 0, task: "Pet a dog", completed: false}];

    const {todos, deleteButtonClicked, updateChecked, editFormSubmit, addNewItemToDoList} = useTodoState(initialToDo);
    /*const initialToDo = [
        {id: 0, task: "clean room", completed: false},
        {id: 1, task: "clean car", completed: false},
        {id: 2, task: "clean dog", completed: false}
    ];*/

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#f7f6f2"
        }}
        elevation = {0}
        >
            <AppBar color='primary' position='static' style={{ height: '50px'}}>
                <Toolbar>
                    <Typography color = "inherit" align = "left" variant = "h5">TO DO LIST</Typography>
                </Toolbar>
            </AppBar>
            
            <Grid container justify = "center" style={{marginTop: "10px"}}>
                <Grid item xs={11} md= {8} lg={4}>
                    <ToDoForm addNewItem = {addNewItemToDoList}/>
                    <ToDoList 
                        todos={todos} 
                        deleteClicked = {deleteButtonClicked}
                        checked={updateChecked}
                        editFormSubmit = {editFormSubmit}
                        />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ToDoApp;

// - ToDoApp
//  - ToDoForm
//  - ToDoList
//   - ToDoItem

//each task will have an id, task, completed