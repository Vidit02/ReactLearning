import React from 'react'

export const ListEmployees = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td>{props.users.id}</td>
          <td>{props.users.firstname}</td>
          <td>{props.users.lastname}</td>
        </tr>
      </table>
    </div>
  )
}
