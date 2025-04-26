import React, {useState} from 'react'
// import { cars } from './ListCars'
import ListCars from './ListCars'
function Cars() {
    const [searchItem, setSearchItem] = useState('')
    return (
        <div>
            <div className="list-car-header">
                <h3 style={{marginRight: '343px'}}>My Cars</h3>
                <div>
                    <input type='text' placeholder='Search' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />    
                </div>
            </div>
            <ListCars searchItem={searchItem} />
            {/* {cars} */}
        </div>
    )
}

export default Cars