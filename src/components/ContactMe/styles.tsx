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
    gap: '1rem',
    padding: '2rem 0',
    zIndex: '1',
  },
});

const ContactFormHeader = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '90%',
    margin: '0 auto',
  },
});

const ContactFormText = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
    textAlign: 'center',
  },
});

const ContactFormInputWrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    alignItems: 'center',
    gap: '2rem',
  },
});

const ContactFormInput = chakra(Input, {
  baseStyle: {
    width: '100%',
    height: '60px',
    backgroundColor: '#f8f9fa',
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

    height: '200px',
    border: '1px solid #212529',
    fontSize: '17px',
    borderRadius: '15px',
    backgroundColor: '#f8f9fa',
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
