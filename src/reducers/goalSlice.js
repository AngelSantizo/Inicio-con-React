//importamos slice de reux
import { createSlice } from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    //iniciamos su estado
    name: 'goals',
    initialState: {
        value: []
    }, //colocamos aqui su accion
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            const indexToRemove = state.value.findIndex(goal => goal.name === action.payload.name);
            if (indexToRemove !== -1) {
                state.value.splice(indexToRemove, 1);
            }
        }
    }
})

export const {addGoal, removeGoal} = goalsSlice.actions;

export default goalsSlice.reducer;