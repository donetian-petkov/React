import {useEffect} from "react";

export const TaskItem = ({title, taskDeleteHandler, taskId}) => {

    useEffect(() => {
        console.log('mounted');

        return () => {
            console.log('unmount')
        }
    },[]);

    return (
        <li>{title} <button onClick={() => taskDeleteHandler(taskId)}>X</button></li>
    );

};