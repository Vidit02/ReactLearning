import { useMutation } from "react-query"

const { default: axios } = require("axios")

const addData = (data) => {
    return axios.post("https://reqres.in/api/users",data)
} 

export function useAddData() {
    return useMutation(addData,{
        onSuccess: ()=> console.log("Success")
    },{
        onError: ()=> console.log("Error")
    },{
        onSettled: ()=> console.log("Settled")
    },{
        onAbort: ()=> console.log("Aborted")
    }
    )
} 
