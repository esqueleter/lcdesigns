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
} from './styles';
import { IoIosPaperPlane } from 'react-icons/io';
import { IContactMe } from '../../interfaces/IContactMe';

const ContactMe: NextPage<{ data: IContactMe }> = ({ data }) => {
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
        <ContactForm onSubmit={handleSubmit(submitHandler)}>
          <ContactFormHeader>
            <ContactFormText fontSize={'28px'}>{data.title}</ContactFormText>
            <ContactFormText variant="subtitle">
              {data.subtitle}
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
