import React from 'react'
import { isError } from 'react-query';
import { useAddData } from '../service/QueryService4'

export const QueryDemo4 = () => {
    const res = useAddData();
    console.log("Res" , res);
    const submit = () =>{
        var data = {
            name: "Rohit",
            job : "Cricketer"
        }
        res.mutate(data)
        console.log(res);
    }
  return (
    <div>
        {
            res.isIdle || res.isLoading ? <button onClick={submit}>Add Data</button>
                : <button disabled>Data Loaded</button>
        }
    </div>
  )
}
