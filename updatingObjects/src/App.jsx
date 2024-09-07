import { useState } from 'react'
import './App.css'

function App() {
  const [car, setCar] = useState({  year: 2024,
                                    make: "Toyota",
                                    model: "Corolla"

  })
  function handleYear(e){
    setCar(c=>({...c ,year: e.target.value })

    )
  };
function handleMake(e){
  setCar(c=>({...c,make: e.target.value}))
}
function handleModel(e){
  setCar(c=>({...c,model: e.target.value}))
}

  return (
    <>
      <p>Your favorite car is : "{car.year} {car.make} {car.model}"</p>
      <input type='number' value={car.year} onChange={handleYear}></input><br/>
      <input type='text' value={car.make} onChange={handleMake} ></input><br/>
      <input type='text' value={car.model} onChange={handleModel}></input>




    </>
  )
}

export default App
