import { useState } from 'react'
function App() {
  const [foods, setFoods] = useState(["Apple", "Orange","Mango"])
function addFoods(){
  let newFood =document.getElementById("foodInput").value
  document.getElementById("foodInput").value=''
  if(newFood!=""){
    setFoods((f)=>([...f,newFood]))
  }
}
function removeFoods(index){
  setFoods(foods.filter((element,i)=>i!=index)) 
}
  return (
    <div> <h1>List of Foods</h1>
      <ul>
      {foods.map((food,index)=>
      <li key={index} onClick={()=>removeFoods(index)}>{food}</li>)}
      </ul>
      <input type='text' id='foodInput' placeholder='Enter food name'/>
      <button onClick={addFoods}>Add Food</button>
    </div>
  )
}
export default App
