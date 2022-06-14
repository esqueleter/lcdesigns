import { Text, Box, Flex, chakra } from '@chakra-ui/react';
import { DefaultIcon, DefaultButton } from '../../styles/defaultComponents';

const Navbar = chakra(Box, {
  baseStyle: {
    maxWidth: '1300px',
    minHeight: '6vh',
    width: '100%',
    margin: '0 auto',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '2',
    transition: 'all 0.2s ease-in',
  },
});

const NavbarHeader = chakra(Flex, {
  baseStyle: {
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 1rem',
    alignItems: 'center',
  },
  variants: {
    dark: {
      backgroundColor: '#212529',
    },
    light: {
      backgroundColor: '#f8f9fa',
    },
  },

  defaultProps: {
    variant: 'dark',
  },
});

const NavbarLogo = chakra(Box, {
  baseStyle: {
    width: '50px',
    height: '50px',
  },
});

const NavbarTitle = chakra(Text, {
  baseStyle: {
    fontSize: '30px',
    fontWeight: '500',
    fontFamily: 'Mieghommel',
    margin: '0',
    color: 'blue',
  },

  variants: {
    dark: {
      color: 'white',
    },

    light: {
      color: 'black',
    },
  },

  defaultProps: {
    variant: 'dark',
  },
});

const NavbarButton = chakra(DefaultButton, {
  baseStyle: {
    width: '40px',
    height: '40px',
  },
});

const NavbarIcon = chakra(DefaultIcon);

export {
  Navbar,
  NavbarHeader,
  NavbarLogo,
  NavbarTitle,
  NavbarButton,
  NavbarIcon,
};
