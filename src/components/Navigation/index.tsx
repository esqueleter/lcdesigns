import type { NextPage } from 'next'
import Image from 'next/image'
import {Link} from "react-scroll"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from "../../assets/images/reactlogo.svg"
import styles from "./styles.module.scss"

const Navigation: NextPage = () => {
  return (
   <>
      <Navbar bg="dark" variant="dark" expand="lg" className={`${styles.navigation} px-3`}>
        <Navbar.Brand className="d-flex align-items-center">
          <Image src={logo} width="40px" height="40px" alt="Logo" />
          <span className="ms-3">LCDesigns</span>
        </Navbar.Brand>

        <Navbar.Toggle/>
        
        <Navbar.Collapse className="justify-content-end me-4">
          <Nav>
              <Nav.Link as="span">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={200}>Ínicio</Link>
              </Nav.Link>
          
              <Nav.Link as="span">
                <Link to="projects" spy={false} smooth={true} offset={-40} duration={200}>Projetos</Link>
              </Nav.Link>

              <Nav.Link href="/colletions">Coleções</Nav.Link>

              <NavDropdown title="Sobre">
                <NavDropdown.Item>
                  <Link to="about-me" spy={true} smooth={true} offset={-40} duration={200}>Sobre a Designer</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="about-enterprise" spy={true} smooth={true} offset={50} duration={200}>Sobre LCDesingns</Link>
                </NavDropdown.Item>
              </NavDropdown>
          
              <Nav.Link as="span">
               <Link to="contact" spy={true} smooth={true} offset={50} duration={200}>Contato</Link>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Navbar>
   </>
  )
}

export default Navigation
