import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from 'react-bootstrap'
import logo from "../../assets/images/reactlogo.png"

const Navigation: NextPage = () => {
  return (
   <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Image src={logo} layout="fill" alt="Logo"/>
        </Navbar.Brand>
      </Navbar>
   </>
  )
}

export default Navigation
