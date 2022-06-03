import type { NextPage } from 'next';
import Image from 'next/image';
import { Container, Stack } from 'react-bootstrap';
import styles from './styles.module.scss';
import arrowDown from '../../assets/icons/arrowDown.svg';
import { Link } from 'react-scroll';
import Layout from '../Layout';

const Welcome: NextPage = () => {
  return (
    <Layout>
      <Container id="home" fluid className={styles.welcome}>
        <Stack
          gap={5}
          className={`${styles.stack} d-flex col-md-4 mx-auto mt-5 justify-content-center align-items-center`}
        >
          <Image
            src="https://static.tumblr.com/anxftez/F4tq7ucmf/ezgif-5-4c3c2420295d.gif"
            alt="Logo-gif"
            width={350}
            height={350}
          />

          <h3 className="text-white">Design text wrapper</h3>

          <Link
            to="projects"
            spy={false}
            smooth={true}
            offset={-40}
            duration={200}
          >
            <Image
              src={arrowDown}
              width="45px"
              height="45px"
              alt=""
              className={styles.arrowDown}
            />
          </Link>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Welcome;
