import type { NextPage } from 'next';
import Image from 'next/image';
import { Container, Stack } from 'react-bootstrap';
import styles from './styles.module.scss';
import arrowDown from '../../assets/icons/arrowDown.svg';
import { NavLink } from 'react-bootstrap';
import Layout from '../Layout';

const Welcome: NextPage = () => {
  return (
    <Layout id="welcome">
      <Container
        fluid
        className={`${styles.welcome} defaultContainer font-primary`}
      >
        <Stack
          gap={3}
          className={`${styles.stack} d-flex col-md-4 mx-auto mt-5 justify-content-center align-items-center`}
        >
          <Image
            src="https://static.tumblr.com/anxftez/F4tq7ucmf/ezgif-5-4c3c2420295d.gif"
            alt="Logo-gif"
            width={350}
            height={350}
          />

          <h4
            style={{ lineHeight: '30px', marginTop: '1rem', fontSize: '20px' }}
            className="text-white"
          >
            {'scrolla pra baixo :)'}
          </h4>

          <NavLink href="#projects">
            <Image
              src={arrowDown}
              width="65px"
              height="65px"
              alt=""
              className={styles.arrowDown}
            />
          </NavLink>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Welcome;
