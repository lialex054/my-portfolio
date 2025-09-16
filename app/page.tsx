import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>Home Page</div>
      <div>Hi, welcome to my website. Here are some pages you can navigate to:</div>
      <Link href="/projects">Projects</Link> <br />
      <Link href="/contact">Contact</Link> <br /> 
    </div>
  )
}

export default page
