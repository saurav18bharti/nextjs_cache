import Link from 'next/link'
import React from 'react'


export const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
    <Link href="/">
      <p className="mb-4 p-2 rounded hover:bg-gray-700 transition duration-200">Home</p>
    </Link>
    <Link href="/component/fetchoneveryrequest">
      <p className="mb-4 p-2 rounded hover:bg-gray-700 transition duration-200">Every Request</p>
    </Link>
    <Link href="/component/ondemandvalidation">
      <p className="mb-4 p-2 rounded hover:bg-gray-700 transition duration-200">On Demand</p>
    </Link>
    <Link href="/component/timebasedrevalidation">
      <p className="mb-4 p-2 rounded hover:bg-gray-700 transition duration-200">Time Based</p>
    </Link>
  </div>
  )
}
