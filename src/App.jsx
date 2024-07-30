import './App.css'
import List from "./List.jsx";
import {useEffect, useState} from "react";

function App() {
    const [posts, setPosts] = useState([]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=10");
            const data = await response.json();
            setPosts(data)
        }

        async function fetchTodos() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/?_limit=10");
            const data = await response.json();
            setTodos(data)
        }

        fetchPosts()
            .catch((e) => {
                console.log(e)
            })
        fetchTodos()
            .catch((e) => {
                console.log(e)
            })
    }, []);


    return (
        <>
            <List items={posts} title="Posts"/>
            <List items={todos} title="Todos"/>
        </>
    );
}

export default App
