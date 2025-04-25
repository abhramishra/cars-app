import { configureStore, createSlice } from "@reduxjs/toolkit";
import { carReducer, addCar, removeCar } from "./slice/carSlice";

const store = configureStore({
    reducer: {
        cars: carReducer
    }
})

console.log(store.getState())

export {store, addCar, removeCar}