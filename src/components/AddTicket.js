import React from 'react'
import { useState } from 'react'


export const AddTicket = (props) => {
  const [name, setname] = useState('')
  const [desc, setdesc] = useState('')

  const submit = (e) => {
    e.preventDefault()
    var obj = {
      name: name,
      desc: desc
    }
    props.addTicket(obj)
  }
  return (
    <div>
      <form onSubmit={submit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" onChange={(e) => { setname(e.target.value) }} />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Desc</label>
          <input type="text" onChange={(e) => { setdesc(e.target.value) }} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
