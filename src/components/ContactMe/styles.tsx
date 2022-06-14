import {
  Input,
  FormControl,
  Box,
  Text,
  chakra,
  Textarea,
} from '@chakra-ui/react';
import {
  DefaultButton,
  DefaultContainer,
  DefaultIcon,
} from '../../styles/defaultComponents';

const ContactMeContainer = chakra(DefaultContainer, {
  baseStyle: {
    marginTop: '3rem',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },
});

const ContactForm = chakra(FormControl, {
  baseStyle: {
    fontFamily: 'VarelaRound',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '2rem',
    zIndex: '1',
  },
});

const ContactFormHeader = chakra(Box, {
  baseStyle: {
    width: '90%',
    margin: '0 auto',
  },
});

const ContactFormText = chakra(Text, {
  baseStyle: {
    fontSize: '12px',
    textAlign: 'center',
  },
  variants: {
    title: { fontSize: '28px' },
    subtitle: { fontSize: '12px' },
  },
});

const ContactFormInputWrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0 auto',
    alignItems: 'center',
    gap: '2rem',
  },
});

const ContactFormInput = chakra(Input, {
  baseStyle: {
    width: '300px',
    height: '60px',
    border: '1px solid #212529',
    fontSize: '17px',
    borderRadius: '15px',
    '&:focus': {
      boxShadow: '0px 0px 15px black',
    },
  },
});

const ContactFormInputMessage = chakra(Textarea, {
  baseStyle: {
    resize: 'none',
    width: '100%',
    maxWidth: '800px',
    height: '200px',
    border: '1px solid #212529',
    fontSize: '17px',
    borderRadius: '15px',
    '&:focus': {
      boxShadow: '0px 0px 15px black',
    },
  },
});

const ContactButton = chakra(DefaultButton, {
  baseStyle: {
    backgroundColor: 'transparent',
    border: '1px solid #212529',
    borderRadius: '50px',
    textTransform: 'uppercase',
    height: '64px',
    width: '64px',
    margin: '0 auto',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#212529',
    },
  },
});

const ContactIcon = chakra(DefaultIcon, {
  baseStyle: {
    color: 'black',
    width: '2rem',
    height: '2rem',
    marginRight: '5px',
    '&:hover': {
      color: 'white',
    },
  },
});

export {
  ContactMeContainer,
  ContactForm,
  ContactFormHeader,
  ContactFormText,
  ContactFormInputWrapper,
  ContactFormInput,
  ContactFormInputMessage,
  ContactButton,
  ContactIcon,
};
