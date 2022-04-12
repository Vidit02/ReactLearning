import React from 'react'
import AboutUs from './AboutUs'

export const Home = (props) => {
  return (
    <div>
        <h1>HomePage</h1>
        <AboutUs students = {props.students}/>
    </div>
  )
}
