import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Context from '../context/Context';
import banner from '../assets/addtodo_banner.svg';
import { useNavigate } from "react-router-dom";

function AddTodo() {

    const { user, addTodos } = useContext(Context);
    const [task, setTask] = useState("");
    const navigate = useNavigate();


    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setTask(target.value);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (task) {
            addTodos(task);
        }
        navigate('/todo');
    }

    return (
        <>
            <h1>Welcome, { user }</h1>
            <img src={banner} alt='Banner da tela de Adicionar Tarefa' />
            <p>Add your new task</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="task" id="task" value={task} />
                <button>Add To List</button>
            </form>
        </>
    )
}

export default AddTodo;
