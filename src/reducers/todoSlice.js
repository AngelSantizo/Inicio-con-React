import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todos',
    initialState: {
        value: [],
    },
    reducers:
    {
        addTodo: (state, action) =>{
            //aca actualizara el estado y hara la peticion para agregar en la base de datos 
            console.log(action.payload);
            state.value.push(action.payload);

            //con fetch haremos la peticion al backend
            fetch('https://localhost:3001/tasks/addTasks',{
                //usaremos primero el metodo post, los headers
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    //aqui incluiremos el API key
                    "Authorization":"AuthKey123"
                },
                body: JSON.stringify(action.payload) //asi es como enviaremos al backend
            }).catch(err=>{
                //si existe algun error lo mostraremos en consola
                console.log(err);
            })
        },
        initAddTodo: (state, action) =>{
            console.log(action.payload);
            state.value.push(action.payload);
        },
        //ahora agregaremos el metodo de remove
        removeTodo: (state, action) =>{
            //antes de remover tenemos que actualizar nuestro estado en redux
            state.value = state.value.filter((task)=>task.id!==action.payload)

            //aqui ya cambiamos el endpoint y agregamos el ID que viene con el payload
            fetch('https://localhost:3001/tasks/removeTasks'+action.payload,{
                //ahora es un delete
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    //aqui incluiremos el API key
                    "Authorization":"AuthKey123"
                }
                //este metodo ya no usa body
            }).catch(err=>{
                //si existe algun error lo mostraremos en consola
                console.log(err);
            })
        }

    }
})

export const { addTodo, initAddTodo, removeTodo} = todoSlice.actions
export const selectTodos = (state) => state.todos.value

export default todoSlice.reducer