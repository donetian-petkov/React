import {Component} from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {

    // no lifecycle methods in the constructor ; no actions with the virtual DOM
    constructor(props) {
        super(props);

        this.state = {

            tasks: [
                'Task 11',
                'Task 22',
                'Task 33'
            ],

            filter: 'all',
            newTask: '',
            character: {}

        }
    }

    componentDidMount() {

        fetch(`https://swapi.dev/api/people/4`)
            .then(res => res.json())
            .then(result => {
                this.setState({character: result})
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    newTaskChangeHandler(e){

        this.setState({newTask: e.target.value})

    }

    addNewTaskHandler(e) {

        e.preventDefault();

        this.setState((state) =>({
            tasks: [...state.tasks, state.newTask],
            newTask: ''
        }));

    }

    render() {

        return (
            <>

            <h2>Current Character: {this.state.character.name}</h2>
            <ul>
                {this.state.tasks.map(x => <TaskItem key={x} title={x} />)}
            </ul>

                <form onSubmit={this.addNewTaskHandler.bind(this)}>
                    <label htmlFor="new-task"/>
                    <input
                        type="text"
                        id="new-ta sk"
                        name="newTask"
                        value={this.state.newTask}
                        // we use bind to give the handler the instance of the class as context
                        //      otherwise the handler will use the event handler as context
                        // and this.setState will point to the event handler
                            onChange={this.newTaskChangeHandler.bind(this)}
                    />

                    <input type="submit" value="Add"  />
                </form>
            </>
        )
    }

}

export default TaskList;