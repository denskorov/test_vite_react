function List(props) {


    return (
        <>
            <h3>{props.title}</h3>
            <ul>
                {props.items.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}

            </ul>
            <hr/>
        </>
    )
}


export default List
