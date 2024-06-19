
const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "KAYDET":
            
           return state;
        
        case "SİL":
            
           return state;
    
        default:
            return state;
    }
}

export default userReducer