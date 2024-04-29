//importamos slice de reux
import { createSlice } from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    //iniciamos su estado
    name:'goals',
    initialState: {
        value: [
            {
            'name':'',
            'description':'',
            'dueDate':''
            }
        ]
    }, //colocamos aqui su accion
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const {addGoal} = goalsSlice.actions;

export default goalsSlice.reducer;