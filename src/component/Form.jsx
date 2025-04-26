import React, {useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCar } from "../store";
function CarForm() {
    const inputRef = useRef(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const dispatch = useDispatch()
    const carsLists = useSelector((state) => state.cars)

    const handleSubmit = function(e) {
        e.preventDefault()
        console.log("Inside handle submit - ", name, price)
        if (!name || !price) {
            alert("Please enter value in the required field!!")
        }
        else if (carsLists.filter(car => car.name == name).length) {
            alert(`Car name ${name} is already exists in your car list`)
        }
        else {
            const payload = {
                id: crypto.randomUUID(),
                name, price
            }
            dispatch(addCar(payload))
            
            setName('')
            setPrice('')
            inputRef.current.focus();
        }
    }
    const handleChange = (e) => {
        if (e.target.name == "name") {
            setName(e.target.value)
        } else {
            setPrice(e.target.value)
        }
    }
    return (
        <form className="car-form" onSubmit={handleSubmit}>
            <div className="mr-40">
                <label>Car Name</label>
                <input type="text" ref={inputRef} name="name" onChange={handleChange} value={name} />
            </div>
            <div className="mr-40">
                <label>Car Value</label>
                <input type="number" name="price" onChange={handleChange} value={price} />
            </div>
            <input type="submit" value="Add Car" />
        </form>
    )
}

export default CarForm