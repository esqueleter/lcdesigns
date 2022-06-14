import type { NextPage } from 'next';
import Link from 'next/link';
import {
  NavbarList,
  NavbarItem,
  NavbarDrawer,
  NavbarDrawerContent,
} from './styles';

const MobileNav: NextPage<{
  isOpen: any;
  placement: any;
  onClose: any;
  finalFocusRef: any;
}> = ({ isOpen, placement, onClose, finalFocusRef }) => {
  return (
    <>
      <NavbarDrawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={finalFocusRef}
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
    </>
  );
};

export default MobileNav;
