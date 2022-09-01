import {useState} from "react";

export const CreateTask = ({onTaskCreate}) => {

    const [task, setTask] = useState('');

    const onSubmit = (e) => {

        e.preventDefault();

        onTaskCreate(task);

        setTask('');

    }

    const onChange = (e) => {

        setTask(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="taskName"
                value={task}
                onChange={onChange}
                placeholder="Do the dishes"
            />
            <input type="submit" value="Add" />
        </form>
    )

}