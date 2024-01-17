export default function storeReducer(state = [], action) {

    switch (action.type) {
        case 'REMOVE_FROM_FAVORITES':
          return state.filter(azienda => azienda.company_name !== action.payload.company_name)
        case 'ADD_TO_FAVORITES':
          return [ ...state, action.payload ]
    
        default:
            break;
    }
    console.log(state)
    return state;
}