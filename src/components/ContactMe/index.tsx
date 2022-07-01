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
import { useRef, useState } from 'react';
import { sendEmail } from '../../pages/api/sendEmail';

const ContactMe: NextPage<{ data: IContactMe }> = ({ data }) => {
  const form = useRef() as any;

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [isSendend, setIsSended] = useState(false);
  const [returnMessage, setReturnMessage] = useState('');

  const submitHandler = (formData: {
    lcName?: string;
    lcEmail?: string;
    lcMessage?: string;
  }) => {
    sendEmail(formData)
      .then((res: any) => {
        setIsSended(true);
        setReturnMessage('Email foi enviado com sucesso!');
      })
      .catch((err: any) => {
        setIsSended(false);
        setReturnMessage('Erro ao enviar o email, tente novamente mais tarde.');
      });
    reset();
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
