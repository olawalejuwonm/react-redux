
export let user = (state, action) => {
    console.log("in reducer", action)
    if (action.type == "login") {
        let sucess = action.payload.success
        let message = action.payload.message
        return ({ ...state, loggedIn: sucess, message, user: { ...action.payload.user } })
    }
    
    else {
        return ({loggedIn: false})
    }

    
}


