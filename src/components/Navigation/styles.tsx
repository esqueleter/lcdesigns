import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/react';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  List,
  ListItem,
  Text,
  Box,
  Icon,
  Button,
  Flex,
  chakra,
} from '@chakra-ui/react';

const Navbar = chakra(Box, {
  baseStyle: {
    maxWidth: '1300px',
    minHeight: '6vh',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '2',
    transition: 'all 0.2s ease-in',
  },
});

const NavbarOverlay = chakra(DrawerOverlay);

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

const NavbarDrawer = chakra(Drawer);

const NavbarDrawerContent = chakra(DrawerContent, {
  baseStyle: {
    maxWidth: '100vw',
    height: '94vh',
    bottom: '0',
    top: 'inherit !important',
    backgroundColor: 'transparent',
  },
});

const NavbarList = chakra(List, {
  baseStyle: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    padding: '5rem 0',
    backgroundColor: 'rgba(33, 37, 41, 0.90)',
    border: '0',
  },
});

const NavbarItem = chakra(ListItem, {
  baseStyle: {
    border: '0',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '20px',
    color: 'white',
    backgroundColor: 'transparent',
    height: '5rem',
    lineHeight: '5rem',
    a: {
      width: '100%',
      '&:hover': {
        color: 'white',
      },
    },
  },
});

const NavbarButton = chakra(Button, {
  baseStyle: {
    border: '0',
    padding: '0',
    backgroundColor: 'transparent',
    width: '40px',
    height: '40px',
  },
});

const NavbarIcon = chakra(Icon, {
  baseStyle: {
    width: '100%',
    height: '100%',
  },
});

const components = {
  Navbar,
  NavbarHeader,
  NavbarLogo,
  NavbarTitle,
  NavbarList,
  NavbarItem,
  NavbarButton,
  NavbarIcon,
  NavbarDrawer,
  NavbarDrawerContent,
  NavbarOverlay,
};

const theme = extendTheme({ components });

export {
  Navbar,
  NavbarHeader,
  NavbarLogo,
  NavbarTitle,
  NavbarList,
  NavbarItem,
  NavbarButton,
  NavbarIcon,
  NavbarDrawer,
  NavbarDrawerContent,
  NavbarOverlay,
  theme,
};
