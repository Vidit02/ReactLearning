import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    var id = useParams().id;
  return (
    <div><h1>MovieDetails</h1>
        <h2>id : {id}</h2>
    </div>
  )
}
