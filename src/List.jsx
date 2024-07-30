import {useState} from "react";

function List(props) {

    const [fruits, setFruits] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
        .then((res) => res.json())
        .then((data) => {
            setFruits(data)
        })

    return (
        <ul>
            {fruits.map((fruit) => (
                <li key={fruit.id}>
                    {fruit.title}
                </li>
            ))}

        </ul>
    )
}


export default List
