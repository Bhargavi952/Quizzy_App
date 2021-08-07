import axios from "axios"

const { LOGIN_REQ, LOGIN_SUC, LOGIN_FAIL, LOG_OUT } = require("./actionTypes")

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

const LogOutSuccess = (payload)=>{
    return {
        type:LOG_OUT,
        payload
    }
}

export const SignOut = () =>(dispatch)=>{
   console.log(12)

   dispatch(LogOutSuccess())
   

}

export const SignIn = (payload) =>async(dispatch)=>{
    dispatch(LoginReq)
   
    
    try{
        const {data} = await axios.post("http://localhost:4000/login",payload)
        console.log(data.user._id)
        
        return dispatch(LoginSuccess(data))
    }
    catch(err){
        alert(`wrong user Credentials ${err}`)
        return dispatch(LoginFail)
       
    }

}