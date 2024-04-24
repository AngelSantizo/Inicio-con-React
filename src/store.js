import { configureStore } from "@reduxjs/toolkit";

//importamos el reducer creado para las metas
import goalSlice from "./reducers/goals";

export default configureStore({
    reducer:{
        goal: goalSlice
    }
})