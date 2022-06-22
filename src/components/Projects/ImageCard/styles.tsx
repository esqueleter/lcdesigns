import { Center, Box, Text, Stack, Heading, chakra } from '@chakra-ui/react';

const CardWrapper = chakra(Center, {
  baseStyle: {
    padding: '1rem',
  },
});

const Card = chakra(Box, {
  baseStyle: {
    maxWidth: '280px',
    maxHeight: '470px',
    height: '470px',
    width: 'full',
    boxShadow: '0 0px 10px -1px black',
    borderRadius: '15px',
    overflow: 'hidden',
  },
});

const CardHead = chakra(Box, {
  baseStyle: {
    height: '300px',
    marginBottom: '0.1rem',
    position: 'relative',
  },
});

const CardBody = chakra(Stack, {
  baseStyle: {
    padding: '1rem',
  },
});

const CardTitle = chakra(Heading, {
  baseStyle: {
    fontSize: '18px!important',
  },
});

const CardText = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
    color: 'gray',
  },
});

export { CardWrapper, Card, CardHead, CardBody, CardTitle, CardText };
