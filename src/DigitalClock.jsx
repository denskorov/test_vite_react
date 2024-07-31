import {useEffect, useState} from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const formatTime = () => {
        const hours = padNUmber(time.getHours() % 12 || 12)
        const minutes = padNUmber(time.getMinutes())
        const seconds = padNUmber(time.getSeconds())
        const meridiem = hours >= 12 ? 'PM' : 'AM'


        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }


    function padNUmber(number) {
        return number < 10 ? '0' + number : number
    }

    return <>

        <div style={{textAlign: 'center', color: 'white', backgroundColor: '#555', padding: '30px', fontSize: '32px'}}>
            {formatTime()}
        </div>


    </>
}

export default DigitalClock;