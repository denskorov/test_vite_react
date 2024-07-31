import './App.css'
import {useRef} from "react";

function App() {


    const input = useRef(null)

    return (
        <>
            <input ref={input}/>
            <button onClick={() => input.current.focus()}>Click me!</button>

        </>
    );
}

export default App
