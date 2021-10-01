
export let user = (state, action) => {
    if (action.type == "login") {
        let sucess = action.payload.success || false
        return ({ ...state, loggedIn: sucess, user: { ...action.payload.user } })
    }
    if (action.type == "signup") {
        
    }
}


