import {useState} from "react";

function MyComponentForm() {


    const [user, setUser] = useState({
        name: '',
        age: 20,
        gender: 'male',
    });

    // const [name, setName] = useState("");
    // const [age, setAge] = useState(50);
    // const [gender, setGender] = useState('male');
    const [comment, setComment] = useState("");
    const [color, setColor] = useState("#eee");


    return <>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={user.name} onChange={(e) => setUser(u => ({...u, name: e.target.value}))}/>
        </div>
        <div>
            <label htmlFor="">Age</label>
            <input type="number" value={user.age} onChange={(e) => setUser(u => ({...u, age: +e.target.value}))}/>
        </div>
        <div>
            <label htmlFor="">Gender</label>
            <input type="radio" value="male" checked={user.gender === 'male'}
                   onChange={(e) => setUser(u => ({...u, gender: e.target.value}))}/>
            <input type="radio" value="female" checked={user.gender === 'female'}
                   onChange={(e) => setUser(u => ({...u, gender: e.target.value}))}/>
        </div>
        <div>
            <label htmlFor="">Comment</label>
            <textarea onChange={(e) => setComment(e.target.value)}>{comment}</textarea>
        </div>
        <div>
            <label htmlFor="">Color</label>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        </div>
        <hr/>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Gender:</b> {user.gender}</p>
        <p><b>Comment:</b> {comment}</p>
        <p><b>Color:</b>
            <button style={{backgroundColor: color}}>test</button>
            {color}</p>
    </>
}

export default MyComponentForm;