import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCar } from "../store";
function CarForm() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const dispatch = useDispatch()

    const handleSubmit = function(e) {
        e.preventDefault()
        console.log("Inside handle submit - ", name, price)
        const payload = {
            id: Math.ceil(Math.random() * 100),
            name, price
        }
        dispatch(addCar(payload))
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
            <div>
                <label>Car Name</label>
                <input type="text" name="name" onChange={handleChange} value={name} />
            </div>
            <div>
                <label>Car Value</label>
                <input type="number" name="price" onChange={handleChange} value={price} />
            </div>
            <input type="submit" value="Add Car" />
        </form>
    )
}

export default CarForm