import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/icons/logoLCDesigns.svg';
import {
  Navbar,
  NavbarHeader,
  NavbarLogo,
  NavbarTitle,
  NavbarList,
  NavbarItem,
  NavbarButton,
  NavbarIcon,
  NavbarOverlay,
  NavbarDrawer,
  NavbarDrawerContent,
} from './styles';
import { BiMenu, BiX } from 'react-icons/bi';
import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';

const Navigation: NextPage<{ navbarState: boolean }> = ({ navbarState }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const btnRef = useRef() as any;

  return (
    <>
      <Navbar>
        <NavbarHeader>
          <Link href="#welcome">
            <NavbarLogo>
              <Image src={logo} width="60px" height="60px" alt="Logo" />
            </NavbarLogo>
          </Link>

          <NavbarTitle variant={isOpen ? 'dark' : 'light'}>
            LC Designs
          </NavbarTitle>

          <NavbarButton ref={btnRef} onClick={onToggle}>
            <NavbarIcon as={isOpen ? BiX : BiMenu} />
          </NavbarButton>
        </NavbarHeader>

        <NavbarDrawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <NavbarDrawerContent>
            <NavbarList>
              <NavbarItem onClick={onClose}>
                <Link href="#welcome">ínicio</Link>
              </NavbarItem>
              <NavbarItem onClick={onClose}>
                <Link href="#projects">projetos</Link>
              </NavbarItem>
              <NavbarItem onClick={onClose}>
                <Link href="#about-me">designer</Link>
              </NavbarItem>
              <NavbarItem onClick={onClose}>
                <Link href="#about-enterprise">empresa</Link>
              </NavbarItem>
              <NavbarItem onClick={onClose}>
                <Link href="#contact-me">contato</Link>
              </NavbarItem>
            </NavbarList>
          </NavbarDrawerContent>
        </NavbarDrawer>
      </Navbar>
    </>
  );
};

export default Navigation;
