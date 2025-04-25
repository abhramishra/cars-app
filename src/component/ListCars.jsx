import React from "react";
import { useSelector } from "react-redux";

function ListCars() {
    const carLists = useSelector((state) => {
        return state.cars
    })
    
    console.log(carLists)
    return (
        <ul>
            {
                carLists.map(car => {
                    return (
                        <li key={car.id}>
                            <p>{ car.name } - {car.price}</p>
                            
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListCars
