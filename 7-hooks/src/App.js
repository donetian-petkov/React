import './App.module.css';
import {TaskList} from "./TaskList";
import styles from './App.module.css';
import {CreateTask} from "./CreateTask";
import {useState} from "react";

function App() {

    const [tasks, setTasks] = useState([
        {_id: 1, title: 'first task'},
        {_id: 2, title: 'second task'},
        {_id: 3, title: 'third task'}
    ]);

    const onTaskCreate = (newTask) => {
        setTasks(oldTasks => [
            ...oldTasks,
            {
                _id: oldTasks[oldTasks.length - 1]._id + 1,
                title: newTask
            }
        ]);
    };


    return (
        <div className={styles['site-wrapper']}>
            <header>
                <h1>TODO App</h1>
            </header>

            <main>
                <TaskList tasks={tasks}/>
                <CreateTask onTaskCreate={onTaskCreate}/>
            </main>
        </div>
    );
}

export default App;
