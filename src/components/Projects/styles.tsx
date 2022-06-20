import { chakra } from '@chakra-ui/react';
import {
  DefaultButton,
  DefaultContainer,
} from '../../styles/defaultComponents';

const ProjectContainer = chakra(DefaultContainer, {
  baseStyle: {
    justifyContent: 'center',
    paddingTop: '3rem',
  },
});

const ProjectButton = chakra(DefaultButton, {
  baseStyle: {
    display: 'flex',
    margin: '2rem auto',
    backgroundColor: '#212529',
    borderRadius: '2px',
    textAlign: 'left',
    color: 'white',
    transition: 'transform 0.1s ease-in-out',
    width: '200px',
    fontWeight: '500',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#212529',
      a: {
        color: 'white',
      },
    },
  },
});

export { ProjectContainer, ProjectButton };
