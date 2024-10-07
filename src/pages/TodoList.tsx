 
import { useContext, useEffect } from "react";
import Context from "../context/Context";
import banner from '../assets/todolist_banner.svg';
import { Todo } from "../api/todosApi";

function TodoList() {

    const { user, todos, loading, getTodos, editTodos } = useContext(Context);

    useEffect(() => {
        console.log('UseEffect TodoList');
        if (!todos.length) {
            getTodos();
        }
    },[]);

    function handleChange(task: Todo) {
        console.log('handleChange', task);
        editTodos({...task, checked: !task.checked})
    }

    return (
        <>
            <h1>Welcome, { user }</h1>
            <img src={banner} alt='Banner da tela de Todolist' />
            <button>Add new Task</button>
            <p>Daily Tasks</p>
            <ul>
                {
                    loading ? <p>Loading...</p> 
                        : todos.map((task) => {
                            return <li key={task.id}>
                                <input onChange={() => handleChange(task)} type='checkbox' value={task.value} checked={task.checked} />
                                {task.value}
                            </li>
                        })
                }
            </ul>
        </>
    )
}

export default TodoList;
