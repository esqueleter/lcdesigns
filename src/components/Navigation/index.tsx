import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/icons/logoLCDesigns.svg';
import {
  Navbar,
  NavbarHeader,
  NavbarLogo,
  NavbarTitle,
  NavbarButton,
  NavbarIcon,
} from './styles';
import MobileNav from './MobileNav';
import { BiMenu, BiX } from 'react-icons/bi';
import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';

const Navigation: NextPage<{ navbarState: boolean }> = ({ navbarState }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
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

          <NavbarTitle>LC Designs</NavbarTitle>

          <NavbarButton ref={btnRef} onClick={onToggle}>
            <NavbarIcon as={isOpen ? BiX : BiMenu} />
          </NavbarButton>
        </NavbarHeader>

        <MobileNav
          isOpen={isOpen}
          placement={'left'}
          onClose={onClose}
          finalFocusRef={btnRef}
        />
      </Navbar>
    </>
  );
};

export default Navigation;
