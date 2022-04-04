import React from 'react'
import { TicketDetails } from './TicketDetails'

export const TicketList = (props) => {
  return (
    <div>
        {
            props.ticket.map((ticket)=>{
                return (<TicketDetails ticket = {ticket} deleteTicket = {props.deleteTicket} />)
            })
        }
    </div>
  )
}
