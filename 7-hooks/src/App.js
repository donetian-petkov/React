import './App.module.css';
import {TaskList} from "./components/TaskList";
import styles from './App.module.css';
import {CreateTask} from "./CreateTask";
import useFetch from "./hooks/useFetch";

function App() {

    const [ tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);

    const onTaskCreate = (newTask) => {
        setTasks(oldTasks => [
            ...oldTasks,
            {
                _id: oldTasks[oldTasks.length - 1]._id + 1 || 1,
                title: newTask
            }
        ]);
    };

    const taskDeleteHandler = (taskId) => {

        setTasks(oldTasks => oldTasks.filter(x => x._id !== taskId))

    }


    return (
        <div className={styles['site-wrapper']}>
            <header>
                <h1>TODO App</h1>
            </header>

            <main>
                {
                    isLoading
                        ?   <p>Loading...</p>
                        :   <TaskList tasks={tasks} taskDeleteHandler={taskDeleteHandler}/>
                }
                            <CreateTask onTaskCreate={onTaskCreate}/>
                        </main>
        </div>
    );
}

export default App;
