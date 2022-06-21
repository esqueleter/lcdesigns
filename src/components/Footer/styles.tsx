import { List, ListItem, HStack, VStack, Text, chakra } from '@chakra-ui/react';
import { DefaultContainer } from '../../styles/defaultComponents';

const FooterContainer = chakra(DefaultContainer, {
  baseStyle: {
    height: '100%',
    padding: '0',
    justifyContent: 'flex-start',
    paddingTop: '6rem',
    '@media (min-width: 1024px)': {
      justifyContent: 'center',
    },
  },
});

const FooterHStack = chakra(HStack, {
  baseStyle: {
    width: '80%',
    margin: '0 auto 1.5rem auto',
    gap: '2rem',
    flexWrap: 'wrap',
    '@media (min-width: 1024px)': {
      justifyContent: 'center',
      transform: 'scale(1.2)',
    },
  },
});

const FooterVStack = chakra(VStack, {
  baseStyle: {
    width: '100%',
    alignItems: 'flex-start',
    margin: '0!important',
    '@media (min-width: 1024px)': {
      width: '30%',
      height: '200px',
      justifyContent: 'stretch',
    },
  },
});

const FooterTitle = chakra(Text, {
  baseStyle: {
    fontSize: '28px',
    color: 'white',
  },
});

const FooterList = chakra(List, {
  baseStyle: {
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
});

const FooterListItem = chakra(ListItem, {
  baseStyle: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '0',
    padding: '0 3px',
    height: '30px',
    width: 'fit-content',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
    '&::after': {
      display: 'block',
      content: '""',
      borderBottom: 'solid 2px #f8f9fa',
      transform: 'scaleX(0)',
      transition: 'transform 250ms ease-in-out',
      transformOrigin: '0% 50%',
    },
    '&:hover': {
      '&::after': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 50%',
      },
    },

    a: {
      '&:hover': {
        color: 'white',
      },
    },
  },
});

const FooterCreatedBy = chakra('a', {
  baseStyle: {
    width: '100%',
    height: '6vh',
    color: 'black',
    textAlign: 'center',
    lineHeight: '6vh',
    fontSize: '16px',
    fontFamily: 'VarelaRound',
    background: 'linear-gradient(to right,  pink 50%, black 50%)',
    backgroundSize: '200% 100%',
    backgroundPosition: 'left bottom',
    cursor: 'pointer',
    transition: 'all .3s  ease-in',
    '&:hover': {
      backgroundPosition: 'right bottom',
      fontSize: '18px',
      color: 'pink',
    },
  },
});

export {
  FooterContainer,
  FooterHStack,
  FooterVStack,
  FooterTitle,
  FooterList,
  FooterListItem,
  FooterCreatedBy,
};
