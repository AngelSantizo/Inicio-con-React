//importaremos slice de redux
import { createSlice } from '@reduxjs/toolkit';

//crearemos una constante que nos servira de funcion
export const goalSlice = createSlice({
    //nombre del arreglo
    name:'goals',

    //agregamos su estado inicial
    initialState:{
        value:[{
            name:'',
            description:'',
            dueDate:''
        }]
    },

    //agregamos su accion
    reducers:{
    addGoal:(state, action) => {
        state.value.push(action.payload);
    }
    }
})

//aqui exportamos 
export const {goals} = goalSlice.actions
export default goalSlice.reducers