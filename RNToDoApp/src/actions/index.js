import { ADD_TODO,TOGGLE_TODO } from "./actionTypes";

let nextId = 0
export const addTodo = (text) => {
    return ({
        type:ADD_TODO,
        id:nextId++,
        text
    })
}

export const toggleToDo = (id) => {
    return ({
        type:TOGGLE_TODO,
        id
    })
}

