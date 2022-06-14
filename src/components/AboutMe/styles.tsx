import { Box, Text, VStack, chakra } from '@chakra-ui/react';
import { DefaultContainer, DefaultIcon } from '../../styles/defaultComponents';

const AboutMeContainer = chakra(DefaultContainer, {
  baseStyle: {
    justifyContent: 'space-evenly',
    paddingTop: '2rem',
  },
});

const AboutMeAvatarHolder = chakra(Box, {
  baseStyle: {
    textAlign: 'center',
    position: 'relative',
    margin: '1rem auto',
    width: '8rem',
    height: '8rem',
    span: {
      borderRadius: '100px',
    },
  },
});

const AboutMeStack = chakra(VStack, {
  baseStyle: {
    width: '85%',
    margin: '1rem auto',
    gap: '1rem',
  },
});

const AboutMeTextWrapper = chakra(VStack, {
  baseStyle: {
    gap: '.2rem',
  },
});

const AboutMeText = chakra(Text, {
  baseStyle: {
    textAlign: 'left',
    fontFamily: 'Raleway',
    fontSize: '15px',
  },

  variants: {
    title: {
      fontSize: '0',
    },
    subtitle: {
      fontSize: '0',
    },
    longText: {
      fontFamily: 'Raleway',
      textAlign: 'left',
      maxHeight: '200px',
      overflow: 'scroll',
    },
  },
});

const AboutMeSocialMediaWrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },
});

const AboutMeSocialMediaItem = chakra(DefaultIcon, {
  baseStyle: {
    width: '34px',
    height: '34px',
    marginRight: '1rem',
  },
});

export {
  AboutMeContainer,
  AboutMeAvatarHolder,
  AboutMeStack,
  AboutMeTextWrapper,
  AboutMeText,
  AboutMeSocialMediaWrapper,
  AboutMeSocialMediaItem,
};
