import {useEffect, useContext, useState} from "react";
import {TaskContext} from "../context/TaskContext";
import  styles  from './TaskItem.module.css';

export const TaskItem = ({task}) => {

    const [isEdit, setIsEdit] = useState(false);
    const { taskDeleteHandler, toggleTask} = useContext(TaskContext);

    useEffect(() => {
        console.log('mounted');

        return () => {
            console.log('unmount')
        }
    },[]);

    const taskEditHandler = () => {

        setIsEdit(true);
    }

    const onEdit = (e) => {
        e.preventDefault();

    }

    const classNames = [
        task.isCompleted ? styles.completed : '',
        styles['task-item']
    ];

    const taskTitle = (
        <span
            className={classNames.join(' ')}
            onClick={() => toggleTask(task)}
        >
                {task.title}
            </span>
    );

    const editTask = (
        <form onSubmit={onEdit}>
            <input type="text" defaultValue={task.title}/>
            <input type="submit" value="Edit" />
            <input type="submit" value="Cancel" onClick={() => setIsEdit(false)} />
        </form>

    )

    return (
        <li>
            {isEdit
            ? editTask
            : taskTitle
            }

            {' '}
            <button onClick={() => taskDeleteHandler(task._id)}>X</button>
            <button onClick={() => taskEditHandler()}>Edit</button>
        </li>
    );

};