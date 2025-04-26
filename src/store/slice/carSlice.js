import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "car",
    initialState: [],
    reducers: {
        addCar(state, action) {
            state.push(action.payload)
        },
        removeCar(state, action) {
            return state.filter(car => car.id !== action.payload)
        }
    }
})

export const { addCar, removeCar } = carSlice.actions
export const carReducer = carSlice.reducer