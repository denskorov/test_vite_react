import {useEffect, useState} from "react";

function UseEffectComponent() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)


    useEffect(() => {
        function onResize() {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }

    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height]);


    return <>
        <b>width:</b> {width}
        <b>height:</b> {height}
    </>
}

export default UseEffectComponent;