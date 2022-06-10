import type { NextPage } from 'next';
import Image from 'next/image';
import { Container, Stack, Form, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import Layout from '../Layout';
import styles from './styles.module.scss';
import sendIcon from '../../assets/icons/sendIcon.svg';
import blackPuma from '../../assets/icons/blackPuma.svg';

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
      <Container fluid className={`${styles.contactme} defaultContainer`}>
        <div className={styles.bgIcon}>
          <div className={styles.iconLeft}>
            <Image src={blackPuma} alt="Black Puma Icon" layout="responsive" />
          </div>

          <div className={styles.iconRight}>
            <Image src={blackPuma} alt="Black Puma Icon" layout="responsive" />
          </div>
        </div>
        <Form
          onSubmit={handleSubmit(submitHandler)}
          className={styles.defaultForm}
        >
          <div className={styles.formHeader}>
            <h1>Entre em contato!</h1>
            <span>
              Se está com alguma dúvida ou deseja me contratar, preencha os
              campos que entrarei em contato o mais rápido possível!
            </span>
          </div>

          <div className={styles.userInfoInputs}>
            <Controller
              name="formUsername"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <Form.Control
                    type="text"
                    placeholder="Seu nome"
                    {...field}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Insira seu nome!
                  </Form.Control.Feedback>
                </>
              )}
            ></Controller>

            <Controller
              name="formEmail"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <Form.Control
                    type="email"
                    placeholder="Seu email"
                    {...field}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Email inválido!
                  </Form.Control.Feedback>
                </>
              )}
            ></Controller>
          </div>

          <Controller
            name="formMessage"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <Form.Control
                  className={styles.messageInput}
                  type="text"
                  as="textarea"
                  placeholder="Sua mensagem..."
                  {...field}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Insira sua mensagem!
                </Form.Control.Feedback>
              </>
            )}
          ></Controller>

          <Button type="submit">
            <Image src={sendIcon} alt="Enviar" layout="responsive" />
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default ContactMe;
