import React, { useState } from 'react'

export const FileUpload = () => {
    const [file, setfile] = useState('')
    const [files, setfiles] = useState([])
    const submit = ()=>{
        
    }
    const singlefileHandler = (e) => {
        console.log(e.target.files)
        setfile(e.target.files[0])
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type="file" name="file" onChange={(e)=>{singlefileHandler(e)}} multiple/> 
            <button type='submit' value='update'>Update</button>
        </form>
    </div>
  )
}
