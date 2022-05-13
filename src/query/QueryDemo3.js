import React, { useEffect } from 'react'
import { useService, useService1 } from '../service/QueryService3'

export const QueryDemo3 = () => {
    const res1 = useService("demo1")
    const res2 = useService1("demo2")

    useEffect(() => {
        console.log("This is res1 " , res1);
        console.log("This is res2 " , res2);
    }, [res1,res2])
    
  return (
    <div>
        <button onClick={()=>{res1.refetch()}}>Demo</button>
        <button onClick={()=>{res2.refetch()}}>DEMO</button>
    </div>
  )
}
