import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function ListCars({searchItem}) {
    const dispatch = useDispatch()
    const carLists = useSelector((state) => {
        return state.cars
    })

    const total = carLists
                    .filter(car => car.name.includes(searchItem))
                    .reduce((acc, car) => acc + Number(car.price),0)

    const handleRemove = (id) => {
        dispatch(removeCar(id))
    }
    
    console.log(carLists)
    return (
        <div>
            {
                carLists
                .filter(car => car.name.includes(searchItem))
                .map(car => {
                    return (
                        <li key={car.id}>
                            <p>{ car.name } - {car.price} 
                                <button style={{marginLeft: '20px'}} onClick={() => handleRemove(car.id)}>❌</button>
                            </p>
                            
                        </li>
                    )
                })
            }
            <h4>Final Amount - {total}</h4>
        </div>
        
    )
}

export default ListCars
