import './App.css'
import ComponentA from "./ComponentA.jsx";
import {useState} from "react";

function App() {

    const [user, setUser] = useState("Denys");

    return (
        <>
            <ComponentA user={user} />
        </>
    );
}

export default App
