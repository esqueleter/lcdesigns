import type { NextPage } from 'next';
import { Controller, useForm } from 'react-hook-form';
import Layout from '../Layout';
import {
  ContactMeContainer,
  ContactForm,
  ContactFormHeader,
  ContactFormText,
  ContactFormInputWrapper,
  ContactFormInput,
  ContactFormInputMessage,
  ContactButton,
  ContactIcon,
  ContactBgIconWrapper,
  ContactBgIcon,
} from './styles';

import Image from 'next/image';
import blackPuma from '../../assets/icons/blackPuma.svg';

import { IoIosPaperPlane } from 'react-icons/io';

const ContactMe: NextPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const submitHandler = () => {};

  return (
    <Layout id="contact-me">
      <ContactMeContainer>
        <ContactBgIconWrapper>
          <ContactBgIcon>
            <Image src={blackPuma} alt="Black Puma Icon" layout="responsive" />
          </ContactBgIcon>

          <ContactBgIcon style={{ transform: 'scaleX(-1)' }}>
            <Image src={blackPuma} alt="Black Puma Icon" layout="responsive" />
          </ContactBgIcon>
        </ContactBgIconWrapper>

        <ContactForm onSubmit={handleSubmit(submitHandler)}>
          <ContactFormHeader>
            <ContactFormText variant="title">Entre em contato!</ContactFormText>
            <ContactFormText variant="subtitle">
              Se está com alguma dúvida ou deseja me contratar, preencha os
              campos que entrarei em contato o mais rápido possível!
            </ContactFormText>
          </ContactFormHeader>

          <ContactFormInputWrapper>
            <Controller
              name="formUsername"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <ContactFormInput
                    type="text"
                    placeholder="Seu nome"
                    {...field}
                    required
                  />
                </>
              )}
            ></Controller>

            <Controller
              name="formEmail"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <ContactFormInput
                    type="email"
                    placeholder="Seu email"
                    {...field}
                    required
                  />
                </>
              )}
            ></Controller>
            <Controller
              name="formMessage"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <ContactFormInputMessage
                    type="text"
                    placeholder="Sua mensagem..."
                    {...field}
                    required
                  />
                </>
              )}
            ></Controller>
          </ContactFormInputWrapper>

          <ContactButton type="submit">
            <ContactIcon as={IoIosPaperPlane} />
          </ContactButton>
        </ContactForm>
      </ContactMeContainer>
    </Layout>
  );
};

export default ContactMe;
