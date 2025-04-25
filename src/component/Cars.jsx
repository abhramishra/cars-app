import React from 'react'
// import { cars } from './ListCars'
import ListCars from './ListCars'
function Cars() {
    return (
        <div>
            <div className="list-car-header">
                <h3>My Cars - {}</h3>
                <>Search</>
            </div>
            <ListCars />
            {/* {cars} */}
        </div>
    )
}

export default Cars