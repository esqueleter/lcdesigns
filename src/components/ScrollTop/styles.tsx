import { chakra } from '@chakra-ui/react';
import { DefaultIcon, DefaultButton } from '../../styles/defaultComponents';

const ScrollTopButton = chakra(DefaultButton, {
  baseStyle: {
    width: '2.6rem',
    height: '2.6rem',
    cursor: 'pointer',
    position: 'fixed',
    right: '0',
    bottom: '0',
    borderRadius: '50px',
    backgroundColor: 'black',
    margin: '.5rem',
    opacity: '0',
    color: 'white',
    '&.show': {
      opacity: '1',
    },
    transition: 'opacity ease-in .5s',
  },
});

const ScrollTopIcon = chakra(DefaultIcon, {
  baseStyle: {
    width: '1rem',
    height: '1rem',
  },
});

export { ScrollTopButton, ScrollTopIcon };
