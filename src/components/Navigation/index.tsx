import type { NextPage } from 'next';
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/images/reactlogo.svg';
import styles from './styles.module.scss';

const Navigation: NextPage<{ navbarState: boolean }> = ({ navbarState }) => {
  return (
    <>
      <Navbar
        expand={navbarState ? 'lg' : 'xxl'}
        fixed="top"
        className={`${styles.navigation} ${navbarState && styles.on} px-3`}
      >
        <Nav.Link href="#welcome">
          <Navbar.Brand className="d-flex align-items-center">
            <Image src={logo} width="40px" height="40px" alt="Logo" />
            <span className="ms-3">LCDesigns</span>
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end me-4">
          <Nav>
            <Nav.Link href="#welcome">Ínicio</Nav.Link>

            <Nav.Link href="#projects">Projetos</Nav.Link>

            <Nav.Link href="#about-me">Sobre a Designer</Nav.Link>

            <Nav.Link href="#about-enterprise">Sobre LCDesingns</Nav.Link>

            <Nav.Link href="#contact-me">Entre em contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
