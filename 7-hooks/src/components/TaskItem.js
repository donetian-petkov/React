import {useEffect, useContext, useState} from "react";
import {TaskContext} from "../context/TaskContext";
import styles from './TaskItem.module.css';

export const TaskItem = ({task}) => {

    const [isEdit, setIsEdit] = useState(false);
    const {taskDeleteHandler, toggleTask, editTaskTitle} = useContext(TaskContext);

    useEffect(() => {
        console.log('mounted');

        return () => {
            console.log('unmount')
        }
    }, []);

    const taskEditHandler = () => {

        setIsEdit(true);
    }

    const onEdit = (e) => {
        e.preventDefault();

        const { title } = Object.fromEntries(new FormData(e.target));

        editTaskTitle(task, title);
        setIsEdit(false);

    }

    const classNames = [
        task.isCompleted ? styles.completed : '',
        styles['task-item']
    ];

    const taskTitle = (
        <>
        <span
            className={classNames.join(' ')}
            onClick={() => toggleTask(task)}
        >
                {task.title}
            </span>
            {' '}
            <button onClick={() => taskEditHandler()}>Edit</button>
            <button onClick={() => taskDeleteHandler(task._id)}>Delete</button>
        </>

    );

    const editTask = (
        <form onSubmit={onEdit}>
            <input type="text" name="title" defaultValue={task.title}/>
            <input type="submit" value="Edit"/>
            <input type="submit" value="Cancel" onClick={() => setIsEdit(false)}/>
        </form>

    )

    return (
        <li>
            {isEdit
                ? editTask
                : taskTitle
            }
        </li>
    );

};