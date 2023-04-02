import {Component} from 'react';
import TaskItem from "./TaskItem";
import { TaskContext } from "../context/TaskContext";
import withRouter from "../hoc/withRouter";

class TaskList extends Component {

    // no lifecycle methods in the constructor ; no actions with the virtual DOM
    constructor(props) {
        super(props);

        this.state = {

            tasks: [
                {title:'Task 11', isCompleted: false},
                {title:'Task 22', isCompleted: false},
                {title:'Task 33', isCompleted: false}
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
            tasks: [...state.tasks, {title: state.newTask, isCompleted: false}],
            newTask: ''
        }));

    }

    taskClickHandler(taskTitle) {
        this.setState(state => ({
            tasks: state.tasks.map(x => x.title === taskTitle ? {...x, isCompleted: !x.isCompleted} : x)
        }))
    }

    taskDeleteHandler(e,taskTitle) {

        e.stopPropagation();

        console.log(taskTitle)

        this.setState(state => ({
            tasks: state.tasks.filter(x => x.title !== taskTitle)
        }))
    }

    render() {

        return (

            <TaskContext.Provider value={{taskDeleteHandler: this.taskDeleteHandler.bind(this)}}>

            <h2>Current Character: {this.state.character.name}</h2>
            <ul>
                {this.state.tasks.map(x =>
                    <TaskItem
                    key={x.title}
                    title={x.title}
                    isCompleted={x.isCompleted}
                    onClick={this.taskClickHandler.bind(this)}
                    />)}
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
            </TaskContext.Provider>
        )
    }

}

export default withRouter(TaskList);