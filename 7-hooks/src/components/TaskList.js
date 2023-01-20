import {TaskItem} from "./TaskItem";

export const TaskList = ({
                             tasks,
                             taskDeleteHandler
}) => {

    return (
        <ul>
            {tasks.map(x => <TaskItem
                key={x._id}
                title={x.title}
                taskDeleteHandler={taskDeleteHandler}
                taskId={x._id}
                />
            )}
        </ul>
    )



};