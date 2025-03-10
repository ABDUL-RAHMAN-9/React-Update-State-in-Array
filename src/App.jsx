import React from 'react'
import { useState } from 'react'
import './app.css';


function App()
{
  const [foods, setFoods] = useState(["Apple", "Mango", "Banana"]);

  function handleAddFood()
  {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(f => [...f, newFood]);

  }

  function handleRemoveFood(index)
  {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div className='container'>
      <div className="main">
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) =>
            <li className='list-items' key={index}
              onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter food name' />
        <button className='btn' onClick={handleAddFood}>Add Food</button>
      </div>
    </div>
  )
}

export default App
