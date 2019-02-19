
let nextId = 0
const todos = (state = [],action) => {
    console.log('Action called'+action.type)
    switch (action.type) {
       
        case 'ADD_TODO':
            return [...state,{
                id:nextId++,
                text:action.text,
                completed:false
            }]
            break;
        case 'TOGGLE_TODO':
            return state.map((todo)=>{
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed:!todo.completed
                    }                    
                }
                else {
                    return todo
                }
            })
            return state
        default:
            return state
            break;
    }
   
}
export default todos