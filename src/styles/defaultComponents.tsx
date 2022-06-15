import { Container, Icon, Button, chakra } from '@chakra-ui/react';

const DefaultContainer = chakra(Container, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    fontFamily: 'VarelaRound',
  },
});

const DefaultIcon = chakra(Icon, {
  baseStyle: {
    width: '100%',
    height: '100%',
  },
});

const DefaultButton = chakra(Button, {
  baseStyle: {
    border: '0',
    padding: '0',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    '&:focus-visible': {
      boxShadow: 'none',
    },
    '&:focus': {
      border: '0',
    },
  },
});

export { DefaultContainer, DefaultIcon, DefaultButton };
