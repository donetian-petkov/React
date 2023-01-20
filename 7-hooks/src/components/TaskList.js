import {TaskItem} from "./TaskItem";

export const TaskList = ({
                             tasks
}) => {

    return (
        <ul>
            {tasks.map(x => <TaskItem
                key={x._id}
                title={x.title}
                taskId={x._id}
                />
            )}
        </ul>
    )



};