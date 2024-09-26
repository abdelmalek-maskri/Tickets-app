import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
          <Image src='/mca.png' alt="MCA Logo" width={70} height={30} quality={100}/>
          <h1>MCA Tickets</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
