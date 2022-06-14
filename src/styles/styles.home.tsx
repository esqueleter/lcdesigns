import { chakra } from '@chakra-ui/react';

const HomeContainer = chakra('div', {
  baseStyle: {
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
    height: '100vh',
  },
});

export { HomeContainer };
