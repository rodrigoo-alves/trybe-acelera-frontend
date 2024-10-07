import { useState } from "react";
import Context from "./Context";
import { fetchTodos, putTodo, Todo } from "../api/todosApi";

export type ProviderProps = {
    children: React.ReactNode;
}

export type ProviderValues = {
    user: string;
    onLogin: (username: string) => void;
    todos: Todo[];
    loading: boolean;
    getTodos: () => Promise<void>;
    editTodos: (taskData: Todo) => Promise<void>;
}

function Provider({ children }: ProviderProps) {

    const [user, setUser] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);

    const onLogin = (username: string) => {
        setUser(username);
    }

    const getTodos = async () => {
        try {
            setLoading(true);
            const result = await fetchTodos();
            setTodos(result);
        } catch(error) {
            console.log('Erro ao buscar tarefas.', error);
        } finally {
            setLoading(false);
        }
    };

    const editTodos = async (taskData: Todo) => {
        const updatedTodos = todos.map((task) => {
            if(task.id === taskData.id) {
                task.checked = taskData.checked;
            }
            return task;
        });
        setLoading(true);
        setTodos(updatedTodos);
        setLoading(false);

        await putTodo(taskData);
    };
    

    const values: ProviderValues = {
        user,
        onLogin,
        todos,
        loading,
        getTodos,
        editTodos
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default Provider;
