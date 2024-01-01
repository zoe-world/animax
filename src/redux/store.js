import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './reducers/item'

export default configureStore({
    reducer:{
        item: itemReducer,
    }
})