import {useEffect, useRef, useState} from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)


    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning]);

    const stopWatch = () => {
        setIsRunning(false)
    }
    const startWatch = () => {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }
    const resetWatch = () => {
        setIsRunning(false)
        setElapsedTime(0)
    }

    function formatTime() {
        let hours = Math.floor((elapsedTime) / (1000 * 60 * 60))
        let minutes = Math.floor((elapsedTime) / (1000 * 60) % 60)
        let seconds = Math.floor((elapsedTime) / 1000 % 60)
        let miliseconds = Math.floor((elapsedTime) % 1000 / 10)

        hours = String(hours).padStart(2, '0')
        minutes = String(minutes).padStart(2, '0')
        seconds = String(seconds).padStart(2, '0')
        miliseconds = String(miliseconds).padStart(2, '0')

        return `${hours}:${minutes}:${seconds}:${miliseconds}`
    }

    return (<>
        <div>
            {formatTime()}
        </div>
        <div>
            <button onClick={startWatch}>start</button>
            <button onClick={stopWatch}>stop</button>
            <button onClick={resetWatch}>reset</button>
        </div>
    </>)

}


export default StopWatch;