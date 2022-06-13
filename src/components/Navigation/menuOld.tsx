import type { NextPage } from 'next';
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/icons/logoLCDesigns.svg';
import styles from './styles.module.scss';

const Navigation: NextPage<{ navbarState: boolean }> = ({ navbarState }) => {
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`${styles.navigation} ${navbarState && styles.on} py-0`}
      >
        <div className={styles.navHeader}>
          <Nav.Link href="#welcome">
            <Navbar.Brand className={`${styles.brandNavbar}`}>
              <Image src={logo} width="60px" height="60px" alt="Logo" />
            </Navbar.Brand>
          </Nav.Link>

          <span className={`${styles.brandTitle} fontBrand`}>LC Designs</span>

          <Navbar.Toggle className={`${styles.toggleNav}`} />
        </div>

        <Navbar.Collapse className={styles.collapseNavbar}>
          <Nav className={styles.nav}>
            <Nav.Link href="#welcome">ínicio</Nav.Link>

            <Nav.Link href="#projects">projetos</Nav.Link>

            <Nav.Link href="#about-me">designer</Nav.Link>

            <Nav.Link href="#about-enterprise">empresa</Nav.Link>

            <Nav.Link href="#contact-me">contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
