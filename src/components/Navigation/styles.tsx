import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { Text, Box, Flex, chakra } from '@chakra-ui/react';
import { DefaultIcon, DefaultButton } from '../../styles/defaultComponents';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

const Navbar = chakra(Box, {
  baseStyle: {
    minHeight: '10vh',
    lineHeight: '10vh',
    width: '100%',
    margin: '0 auto',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '2',
    transition: 'all 0.2s ease-in-out',
  },
});

const NavbarHeader = chakra(Flex, {
  baseStyle: {
    maxWidth: '1300px',
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 1rem',
    alignItems: 'center',
    margin: '0 auto',
  },
});

const NavbarLogo = chakra(Box, {
  baseStyle: {
    width: '60px',
    height: '60px',
    cursor: 'pointer',
  },
});

const NavbarTitle = chakra(Text, {
  baseStyle: {
    fontSize: '30px',
    fontWeight: '500',
    fontFamily: 'Mieghommel',
    margin: '0',
    color: 'white',
    cursor: 'pointer',
  },
});

const NavbarButton = chakra(DefaultButton, {
  baseStyle: {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
  },
});

const NavbarIcon = chakra(DefaultIcon, {
  baseStyle: {
    cursor: 'pointer',
  },
});

export {
  Navbar,
  NavbarHeader,
  NavbarLogo,
  NavbarTitle,
  NavbarButton,
  NavbarIcon,
};
