export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_USER':
            return [...state,payload];
        default:
        return state;    
    }
}