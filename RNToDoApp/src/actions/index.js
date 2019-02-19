import { ADD_TODO,TOGGLE_TODO,SHOW_ALL,SHOW_COMPLETE,SHOW_INCOMPLETE } from "./actionTypes";

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

export const showAllTodos = () => {
    console.log('show all todos action');
    
    return({
        type:SHOW_ALL
    })
}

export const showCompleteTodos = () => {
    return ({
        type:SHOW_COMPLETE
    })
}

export const showIncompleteTodos = () => {
    return ({
        type:SHOW_INCOMPLETE
    })
}