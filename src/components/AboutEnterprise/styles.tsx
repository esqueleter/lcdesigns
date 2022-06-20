import { Box, Text, VStack, chakra } from '@chakra-ui/react';
import { DefaultContainer, DefaultIcon } from '../../styles/defaultComponents';

const AboutEnterpriseContainer = chakra(DefaultContainer, {
  baseStyle: {
    justifyContent: 'space-evenly',
    paddingTop: '2rem',
  },
});

const AboutEnterpriseBannerHolder = chakra(Box, {
  baseStyle: {
    textAlign: 'center',
    position: 'relative',
    margin: '0 auto',
    width: '100%',
    height: '150px',
  },
});

const AboutEnterpriseStack = chakra(VStack, {
  baseStyle: {
    width: '90%',
    margin: '1rem auto',
    gap: '1rem',
  },
});

const AboutEnterpriseText = chakra(Text, {
  baseStyle: {
    textAlign: 'left',
    fontFamily: 'Raleway',
    fontSize: '16px',
    margin: '1rem 0',
    maxHeight: '250px',
    overflow: 'scroll',
  },
});

const AboutEnterpriseSocialMediaWrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
});

const AboutEnterpriseSocialMediaItem = chakra(DefaultIcon, {
  baseStyle: {
    width: '34px',
    height: '34px',
    marginRight: '1rem',
  },
});

export {
  AboutEnterpriseContainer,
  AboutEnterpriseBannerHolder,
  AboutEnterpriseStack,
  AboutEnterpriseText,
  AboutEnterpriseSocialMediaWrapper,
  AboutEnterpriseSocialMediaItem,
};
