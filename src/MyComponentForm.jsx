import {useState} from "react";

function MyComponentForm() {


    const [name, setName] = useState("");
    const [age, setAge] = useState(50);
    const [gender, setGender] = useState('male');
    const [comment, setComment] = useState("");
    const [color, setColor] = useState("#eee");


    return <>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Age</label>
            <input type="number" value={age} onChange={(e) => setAge(+e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Gender</label>
            <input type="radio" value="make" checked={gender === 'male'}
                   onChange={(e) => setGender(e.target.value)}/>
            <input type="radio" value="female" checked={gender === 'female'}
                   onChange={(e) => setGender(e.target.value)}/>
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

        <p><b>Name:</b> {name}</p>
        <p><b>Age:</b> {age}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Comment:</b> {comment}</p>
        <p><b>Name:</b> {age}</p>
        <p><b>Color:</b>
            <button style={{backgroundColor: color}}>test</button>
            {color}</p>
    </>
}

export default MyComponentForm;