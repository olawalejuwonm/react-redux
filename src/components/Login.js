import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../Action'
import { store } from '../App'


function LoginM() {
    const login = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [state, setState] = useState("")
    const handle = async(e) => {
        try {
            // console.log("called", e)
            e.preventDefault()
            let user = document.getElementById("user").value
            let pass = document.getElementById("pass").value
        
            let response = await fetch('http://127.0.0.1:8000/api/login', {
                body:  {
                    "cebiz_id":user,
                    "password": pass
                },
                method: "POST"
              
            })
    
            let finalResp = await response.json()
    
            console.log(finalResp)
            store.dispatch(Login(finalResp))
            setState(login.message)
            console.log(state, login)
        } catch (error) {
            alert("An error occured", error.message)
            console.log(error)
        }
    
    
    }
    return (
        <div>
            <div>{state}</div>
            <form onSubmit={handle}>
                <input placeholder="email" type="text" id="user" />
                <input placeholder="password" type="password" id="pass" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginM
