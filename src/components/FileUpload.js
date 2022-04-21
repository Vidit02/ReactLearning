import React, { useState } from 'react'

export const FileUpload = () => {
    const [file, setfile] = useState('')
    const [files, setfiles] = useState([])
    const [laititude, setlaititude] = useState('')
    const [longitude, setlongitude] = useState('')
    const submit = ()=>{    
    }
    const singlefileHandler = (e) => {
        console.log(e.target.files)
        const fi = e.target.files
        console.log(fi[0].name)
        if(e.target.files[0].name.includes(".pdf")){
          console.log(e.target.files[0].name + " is valid")
        } else {
          console.log(e.target.files[0].name + " is not valid");
        }
        setfile(e.target.files[0])
    }
    const getLocation = () =>{
      window.navigator.geolocation.getCurrentPosition((position)=>{
        localStorage.setItem("Latitude",JSON.stringify(position.coords.latitude))
        localStorage.setItem("Longitude",JSON.stringify(position.coords.longitude))
        setlaititude(JSON.stringify(position.coords.latitude))
        setlongitude(JSON.stringify(position.coords.longitude))
      })
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type="file" name="file" onChange={(e)=>{singlefileHandler(e)}} multiple/> 
            <button type='submit' value='update' className='btn btn-outline-info'>Update</button>
        </form>
        <button onClick={getLocation} className="btn btn-outline-primary">Get Location</button>
    </div> 
  )
}
