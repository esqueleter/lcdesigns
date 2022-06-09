import type { NextPage } from 'next';
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/icons/duckLogo.svg';
import styles from './styles.module.scss';

const Navigation: NextPage<{ navbarState: boolean }> = ({ navbarState }) => {
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`${styles.navigation} ${navbarState && styles.on} px-3`}
      >
        <Nav.Link href="#welcome">
          <Navbar.Brand
            className={`${styles.brandNavbar} d-flex align-items-center`}
          >
            <Image src={logo} width="60px" height="60px" alt="Logo" />
            <span className="ms-3 fontBrand">LC Designs</span>
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Collapse
          className={`${styles.collapseNavbar} justify-content-end me-4`}
        >
          <Nav className={styles.nav}>
            <Nav.Link href="#welcome">Ínicio</Nav.Link>

            <Nav.Link href="#projects">Projetos</Nav.Link>

            <Nav.Link href="#about-me">Designer</Nav.Link>

            <Nav.Link href="#about-enterprise">Empresa</Nav.Link>

            <Nav.Link href="#contact-me">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
