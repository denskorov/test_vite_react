import {useState} from "react";

function MyComponentForm() {


    const [foods, setFoods] = useState(['Apple', 'Mango', 'Orange']);

    const [newFoodName, setNewFoodName] = useState('');
    const handleAddFood = () => {
        setFoods(f => [...f, newFoodName])
        setNewFoodName('')
    }
    const handleRemoveFood = (index) => {
        setFoods(f => f.filter((_, i) => i !== index))
    }


    return <>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index) => (
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>
            ))}
        </ul>
        <div>
            <input type="text" onChange={(e) => setNewFoodName(e.target.value)} value={newFoodName}/>
            <button onClick={handleAddFood}>Add food</button>
        </div>
    </>
}

export default MyComponentForm;