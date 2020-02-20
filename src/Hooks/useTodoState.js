
import useLocalStorageState from './useLocalStorageState';

export default initialToDo => {

    const [todos, setTodos] = useLocalStorageState("todos", initialToDo);

    return {
        
        todos,

        deleteButtonClicked : (removeTask) => {

            let newArrayResult = todos.filter(obj => obj.task !== removeTask);
    
            setTodos([...newArrayResult]);
        },
    
        updateChecked : (checkedTask) => {
            
            todos.map(task => {
                if (task.task === checkedTask)
                {
                    task.completed = !task.completed;
                };
            });
    
            let newArray = todos;
    
            setTodos([...newArray]);
    
        },
    
        editFormSubmit : (newValue, previousValue) => {
            
            todos.map(task => {
                if (task.task === previousValue)
                {
                    task.task = newValue;
                };
            });
    
            let newArray = todos;
    
            setTodos([...newArray]);
        },

        addNewItemToDoList : (newToDoItem) => {

            setTodos([...todos, {id: initialToDo.length + 1, task: newToDoItem, completed: false}]);
    
        }
    };

};