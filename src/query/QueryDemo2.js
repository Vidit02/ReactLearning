import React from 'react'
import { useFetchUserData } from '../service/QueryService2'

export const QueryDemo2 = () => {
    const res = useFetchUserData()
    console.log(res)
    
    const addUSer = () =>{
        res.refetch()
        console.log(res)
    }
  return (
    <div>  
        <button onClick={()=>addUSer()}>Click Here </button>
    </div>
  )
}
