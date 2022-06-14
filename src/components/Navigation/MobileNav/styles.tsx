import {
  Drawer,
  DrawerContent,
  List,
  ListItem,
  chakra,
} from '@chakra-ui/react';

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

export { NavbarList, NavbarItem, NavbarDrawer, NavbarDrawerContent };
