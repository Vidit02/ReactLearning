import React from 'react'
import { isError } from 'react-query';
import { ClipLoader } from 'react-spinners';
import { useAddData } from '../service/QueryService4'

export const QueryDemo4 = () => {
    const res = useAddData();
    console.log("Res" , res);
    const submit = () =>{
        var data = {
            name: "Rohit",
            job : "Cricketer"
        }
        res.mutate(data,{
            onSettled: () =>{
             console.log("On Settled is called");   
            },
        })
        console.log(res);
    }
  return (
    <div>
        {
            res.isLoading ?  <ClipLoader />
                :  res.isSuccess ? <button className='btn btn-success' disabled>Data Loaded</button>
                :  <button className='btn btn-outline-primary' onClick={submit}>Add Data</button>    
        }
    </div>
  )
}
