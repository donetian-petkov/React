import {TaskItem} from "./TaskItem";
import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";

export const TaskList = () => {

    const { tasks } = useContext(TaskContext);

    return (
        <ul>
            {tasks.map(x => <TaskItem
                key={x._id}
                task={x}
                />
            )}
        </ul>
    )



};