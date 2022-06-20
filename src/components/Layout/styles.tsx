import { chakra } from '@chakra-ui/react';

const LayoutSection = chakra('section', {
  baseStyle: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    scrollSnapAlign: 'center',
    flexDirection: 'column',
  },
});

const LayoutAnchor = chakra('a', {
  baseStyle: {
    display: 'block',
    position: 'relative',
    visibility: 'hidden',
    top: '-66px',
  },
});

export { LayoutSection, LayoutAnchor };
