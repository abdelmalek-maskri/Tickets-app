import { notFound } from 'next/navigation'
import React from 'react'


export const dynamicParams = true

async function generateStaticParams(){

  const res = await fetch('http://localhost:4001/tickets')

  const tickets = await res.json()

  return tickets.map(ticket => ({
   id: ticket.id 

  }))
}

async function getTicket(id) {

    const response = await fetch(`http://localhost:4001/tickets/${id}`, {
        next: {
            revalidate: 30 // Revalidate every 30 seconds
        }
    })
    if(!response.ok){
      notFound()
    }
    return response.json()
}

export default async function TicketDetails({params}) {
    const ticket = await getTicket(params.id)
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      
        <div className='card'>
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}
