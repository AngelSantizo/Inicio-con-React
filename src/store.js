import { configureStore } from "@reduxjs/toolkit";

//importamos el reducer creado para las metas
import goalReducer from "./reducers/goalSlice";

export default configureStore({
    reducer:{
        goal: goalReducer
    }
})