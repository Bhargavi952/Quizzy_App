import axios from "axios"

const { GETDATA_SUCCESS } = require("./actionTypes")

const getDataSuccess=(payload)=>{
    return{
        type:GETDATA_SUCCESS,
        payload
    }
}

export const GetData = (payload) => async (dispatch)=>{
    try {
        let data = await axios.get(`http://localhost:4000/user/${payload}`)
        
    } catch (error) {
        alert(error.message)
    }
}