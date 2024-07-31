import {useMemo, useState} from "react";

function TodoList() {


    const [tasks, setTasks] = useState([]);

    const [newTaskTitle, setNewTitle] = useState('');

    const countOfTasks = useMemo(() => tasks.length, [tasks]);

    const addTask = () => {
        const task = {
            title: newTaskTitle,
            id: 0
        }
        setTasks(prevTasks => [...prevTasks, task]);
    }
    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }

    const moveUpTask = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    const moveDownTask = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }


    return <>
        <h2>Todo list</h2> {countOfTasks}

        <div>
            <input type="text" value={newTaskTitle} onChange={(e) => setNewTitle(e.target.value)}/>
            <button onClick={addTask}>Add task</button>
        </div>

        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span>{task.title}</span>

                    <button onClick={() => removeTask(index)}>Delete</button>
                    <button onClick={() => moveUpTask(index)}>move Up</button>
                    <button onClick={() => moveDownTask(index)}>move Down</button>
                </li>
            ))}
        </ul>
    </>
}

export default TodoList;