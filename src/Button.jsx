function Button() {

    function handleButtonClick(name, e) {
        console.log('click', name, e)
    }

    return <button onClick={(e) => handleButtonClick('qwd', e)}>Click</button>;
}

export default Button;