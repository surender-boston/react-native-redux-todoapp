
const todos = (state = [],action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,{
                id:action.id,
                text:action.text,
                completed:false
            }]
            break;
        case 'TOGGLE_TODO':

        default:
            break;
    }
    return state
}
export default todos