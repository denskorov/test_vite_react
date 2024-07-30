function Food() {


    const f1 = 'Orange';
    const f2 = 'Orange1';

    return (
        <ul>
            <li>Apple</li>
            <li>{f1}</li>
            <li>{f2.toUpperCase()}</li>
        </ul>
    )
}

export default Food
