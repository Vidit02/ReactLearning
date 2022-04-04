import React from 'react'

export const TicketDetails = (props) => {
  return (
    <div> <table class="table">
    <tbody>
        <tr>
            {
                props.ticket == null ? "NO TICKET FOund"
            :<>
            <td>{props.ticket.name}</td>
            <td>{props.ticket.desc}</td>
            <td><button onClick = {()=>{props.deleteTicket(props.ticket)}}>DELETE</button></td>
            </> }
            
        </tr>
    </tbody>
</table>
    </div>
  )
}
