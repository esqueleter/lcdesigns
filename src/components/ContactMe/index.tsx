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
  SuccessMessage,
  ErrorMessage,
} from './styles';
import { IoIosPaperPlane } from 'react-icons/io';
import { IContactMe } from '../../interfaces/IContactMe';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const ContactMe: NextPage<{ data: IContactMe }> = ({ data }) => {
  const form = useRef() as any;
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const [isSendend, setIsSended] = useState(false);
  const [returnMessage, setReturnMessage] = useState('');

  type IFormData = {
    lcName: string;
    lcEmail: string;
    lcMessage: string;
  };

  const submitHandler = (formData: IFormData | any) => {
    console.log(formData);
    emailjs
      .sendForm(
        'service_qivdzlc',
        'template_110bu5o',
        form.current,
        'g5wF2T4TkFsuC8eXO'
      )
      .then(
        (result) => {
          setIsSended(true);
          setReturnMessage('Email foi enviado com sucesso!');
        },
        (error) => {
          setIsSended(false);
          setReturnMessage(
            'Erro ao enviar o email, tente novamente mais tarde.'
          );
        }
      );
    // reset();
  };

  return (
    <Layout id="contact-me">
      <ContactMeContainer>
        <ContactForm ref={form} onSubmit={handleSubmit(submitHandler)}>
          <ContactFormHeader>
            <ContactFormText fontSize={'28px'}>{data.title}</ContactFormText>
            <ContactFormText variant="subtitle">
              {data.subtitle}
            </ContactFormText>
          </ContactFormHeader>

          <ContactFormInputWrapper>
            <Controller
              name="lcName"
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
            {errors.lcName && errors.lcName.type === 'required' && (
              <span>Insira seu nome!</span>
            )}

            <Controller
              name="lcEmail"
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

            {errors.lcEmail && errors.lcEmail.type === 'required' && (
              <span>Insira seu email!</span>
            )}
            <Controller
              name="lcMessage"
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
            {errors.lcMessage && errors.lcMessage.type === 'required' && (
              <span>Insira sua mensagem!</span>
            )}

            {isSendend ? (
              <SuccessMessage>{returnMessage}</SuccessMessage>
            ) : (
              <ErrorMessage>{returnMessage}</ErrorMessage>
            )}

            <ContactButton type="submit">
              <ContactIcon as={IoIosPaperPlane} />
            </ContactButton>
          </ContactFormInputWrapper>
        </ContactForm>
      </ContactMeContainer>
    </Layout>
  );
};

export default ContactMe;
