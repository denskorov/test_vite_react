import {useState} from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const [timer, setTimer] = useState(null);


    function stopTimer() {
        clearInterval(timer)
    }

    function startTimer() {
        setTimer(setInterval(() => {
                setCounter(counter + 1)
            }, 1000)
        )
    }

    function resetTimer() {
        stopTimer()
        setCounter(0)
    }


    return <>
        <div>
            {counter}
        </div>
        <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer
            }>Reset</button>
        </div>
    </>
}

export default Counter;