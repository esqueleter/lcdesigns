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
    margin: '1rem  auto 0 auto',
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
    gap: '.5rem',
  },
});

const AboutMeTextWrapper = chakra(VStack, {
  baseStyle: {
    gap: '.2rem',
  },
});

const AboutMeHeadText = chakra(Text, {
  baseStyle: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    margin: '0',
    fontSize: '22px',
    fontWeight: '800',
  },
});

const AboutMeText = chakra(Text, {
  baseStyle: {
    textAlign: 'left',
    fontFamily: 'Raleway',
    fontSize: '14px',
    margin: '0',
    maxHeight: '250px',
    overflow: 'scroll',
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
  AboutMeHeadText,
  AboutMeText,
  AboutMeSocialMediaWrapper,
  AboutMeSocialMediaItem,
};
