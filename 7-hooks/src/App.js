import './App.module.css';
import {TaskList} from "./components/TaskList";
import styles from './App.module.css';
import {CreateTask} from "./CreateTask";
import useFetch from "./hooks/useFetch";
import useTodosAPI from "./hooks/useTodosAPI";
import {TaskContext} from "./context/TaskContext";

function App() {

    const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);
    const { removeTodo , addTodo, editTodo } = useTodosAPI();

    const onTaskCreate = async (newTask) => {

        const createdTask = await addTodo(newTask);

        setTasks(oldTasks => [
            ...oldTasks,
            /*{
                _id: oldTasks[oldTasks.length - 1]._id + 1 || 1,
                title: newTask
            }*/
            createdTask
        ]);
    };

    const taskDeleteHandler = async (taskId) => {

        await removeTodo(taskId);

        setTasks(oldTasks => oldTasks.filter(x => x._id !== taskId));

    }

    const editTaskTitle = async (task, newTitle) => {

        const updatedTask = { ...task, title: newTitle };

        await editTodo(task._id, updatedTask);

        setTasks(state => state.map(x => x._id == task._id ? updatedTask : x));

    }

    const toggleTask = async (task) => {

        const updatedTask = {...task, isCompleted: !task.isCompleted};

        await editTodo(task._id, updatedTask);

        setTasks(state => state.map(x => x._id == task._id ? updatedTask : x))
    }


    return (
        <TaskContext.Provider value={{tasks, taskDeleteHandler, toggleTask, editTaskTitle}}>
            <div className={styles['site-wrapper']}>
                <header>
                    <h1>TODO App</h1>
                </header>

                <main>
                    {
                        isLoading
                            ? <p>Loading...</p>
                            : <TaskList/>
                    }
                    <CreateTask onTaskCreate={onTaskCreate}/>
                </main>
            </div>
        </TaskContext.Provider>
    );
}

export default App;
