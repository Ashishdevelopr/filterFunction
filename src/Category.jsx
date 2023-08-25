
import React, { useState } from 'react'
import "./App.css"

const Category = ({activeCategory}) => {
    const [car, setCar] = useState('')
    const [emptyError, setEmpptyError] = useState('')


    const handleInputs = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!car.company || !car.model || !car.price) {
            setEmpptyError("Please Enter all values")
            return
        }
        setEmpptyError('')
        console.log(car)
    }

    const allCars = [
        {
            type: "old",
            vehicles: [
                { company: "Ford", model: "Model T", price: 1500 },
                { company: "Volkswagen", model: "Beetle", price: 2500 },
                { company: "Chevrolet", model: "Bel Air", price: 35000 },
                { company: "Cadillac", model: "DeVille", price: 45000 },
                { company: "Plymouth", model: "Barracuda", price: 28000 },
                { company: "Dodge", model: "Charger", price: 40000 },
                { company: "Buick", model: "Skylark", price: 42000 }
            ]
        },
        {
            type: "new",
            vehicles: [
                { company: "Toyota", model: "Camry", price: 25000 },
                { company: "Honda", model: "Civic", price: 22000 },
                { company: "Ford", model: "Mustang", price: 40000 },
                { company: "Chevrolet", model: "Silverado", price: 35000 },
                { company: "Jeep", model: "Wrangler", price: 28000 },
                { company: "Tesla", model: "Model 3", price: 50000 },
                { company: "BMW", model: "3 Series", price: 45000 }
            ]
        },
    ];



    // const company = ["Ford Model T", "Volkswagen Beetle", "Chevrolet Bel Air", "Cadillac DeVille", "Plymouth Barracuda", "Dodge Charger", "Buick Skylark"]
    // const model = ["Toyota Camry", "Honda Civic", "Ford Mustang", "Chevrolet Silverado", "Jeep Wrangler", "Tesla Model 3", "BMW 3 Series"]
    // const price = [5000, 4500, 6000, 9000, 3000,]

    return (
        <div className='div-body'>


            <label>Company: </label>
            <select name="company" onChange={handleInputs}>
            <option disabled selected>Select Company</option>
                {allCars
                    .filter(category => category.type === activeCategory)
                    .map(category => (
                        category.vehicles.map(vehicle => (
                            <option key={vehicle.company} value={vehicle.company}>
                                {vehicle.company}
                            </option>
                        ))
                    ))
                }
            </select>

            <label>Model: </label>
            <select name="model" onChange={handleInputs}>
            <option disabled selected>Select Model </option>
                {allCars
                    .filter(category => category.type === activeCategory)
                    .map(category => (
                        category.vehicles.map(vehicle => (
                            <option key={vehicle.model} value={vehicle.model}>
                                {vehicle.model}
                            </option>
                        ))
                    ))
                }
            </select>

            <label>Price: </label>
            <select name="price" onChange={handleInputs}>
            <option disabled selected>Pick a Price </option>
                {allCars
                    .filter(category => category.type === activeCategory)
                    .map(category => (
                        category.vehicles.map(vehicle => (
                            <option key={vehicle.price} value={vehicle.price}>
                                {`$ ${vehicle.price}`}
                            </option>
                        ))
                    ))
                }
            </select>



            {/* <label>Company: </label>
        <select name="company" onChange={handleInputs}>
          <option disabled selected>Select Car</option>
          {company.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label>Model: </label>
        <select name="model" onChange={handleInputs}>
          <option disabled selected>Select Car</option>
          {model.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label>Price: </label>
        <select name="price" onChange={handleInputs}>
          <option disabled selected>Select Car</option>
          {price.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select> */}

            <button onClick={handleSubmit}>Search</button>
            <h1>{emptyError}</h1>


        </div>
    )
}


export default Category