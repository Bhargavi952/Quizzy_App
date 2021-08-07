import axios from "axios"

const { LOGIN_REQ, LOGIN_SUC, LOGIN_FAIL } = require("./actionTypes")

const LoginReq = ()=>{
    return {
        type:LOGIN_REQ,
    }
}
const LoginSuccess = (payload)=>{
    return {
        type:LOGIN_SUC,
        payload
    }
}
const LoginFail = () => {
    return {
        type : LOGIN_FAIL
    }
}

export const SignIn = (payload) =>async(dispatch)=>{
    dispatch(LoginReq)
    
    try{
        const data = await axios.post("http://localhost:4000/login",JSON.stringify(payload))
        console.log(data)

        return dispatch(LoginSuccess(data.status))
    }
    catch(err){
        alert(`wrong user Credentials ${err}`)
        return dispatch(LoginFail)
       
    }

}