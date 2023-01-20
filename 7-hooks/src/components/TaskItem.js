import {useEffect, useContext} from "react";
import {TaskContext} from "../context/TaskContext";

export const TaskItem = ({
                             title,
                             taskId}) => {

    const { taskDeleteHandler} = useContext(TaskContext);

    useEffect(() => {
        console.log('mounted');

        return () => {
            console.log('unmount')
        }
    },[]);

    return (
        <li>{title}<button onClick={() => taskDeleteHandler(taskId)}>X</button></li>
    );

};