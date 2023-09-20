import React from "react";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: '',
        }
    }

    addTask = () => {
        const { newTask, tasks } = this.state;
        if (newTask.trim() !== '') {
            this.setState(prevState => ({
                tasks: [...prevState.tasks, newTask],
                newTask: '',
            }));
        }
    }

    render() {
        const { tasks, newTask } = this.state;
        return (
            <div className="App">
                <h1>to do list</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Add task"
                        value={newTask}
                        onChange={(e) => this.setState({ newTask: e.target.value })}
                    />
                    <button onClick={this.addTask}>Add</button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
