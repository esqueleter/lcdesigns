import { Text, VStack, chakra } from '@chakra-ui/react';
import {
  DefaultButton,
  DefaultContainer,
  DefaultIcon,
} from '../../styles/defaultComponents';

const WelcomeContainer = chakra(DefaultContainer, {
  baseStyle: {
    height: '100%',
    '&::-webkit-scrollbar': {
      width: '0px',
    },
  },
});

const WelcomeVStack = chakra(VStack, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem auto 0 auto',
    height: '100vh',
    gap: '2rem',
  },
});

const WelcomeText = chakra(Text, {
  baseStyle: {
    lineHeight: '30px',
    marginTop: '1rem',
    fontSize: '20px',
    color: 'white',
    textAlign: 'center',
    maxWidth: '300px',
  },
});

const WelcomeIcon = chakra(DefaultIcon);

const WelcomeButton = chakra(DefaultButton, {
  baseStyle: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    color: 'white',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.5)',
    },
  },
});

export {
  WelcomeContainer,
  WelcomeVStack,
  WelcomeText,
  WelcomeIcon,
  WelcomeButton,
};
