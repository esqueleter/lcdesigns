import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Stack, ListGroup } from 'react-bootstrap';
import Layout from '../Layout';
import styles from './styles.module.scss';
import blackTiger from '../../assets/icons/blackTiger.svg';

const Footer: NextPage = () => {
  return (
    <Layout id="footer">
      <Container
        fluid
        className={`${styles.footer} defaultContainer font-primary`}
      >
        <Stack direction="horizontal" gap={3} className={styles.stack}>
          <Stack direction="vertical">
            <h1>Menu</h1>

            <ListGroup className={styles.listGroup}>
              <ListGroup.Item>
                <Link href="#welcome">ínicio</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#projects">projetos</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#about-me">designer</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#contact-me">contato</Link>
              </ListGroup.Item>
            </ListGroup>
          </Stack>
          <div className={styles.breakLine}></div>
          <Stack direction="vertical">
            <h1>Redes sociais</h1>
            <ListGroup className={styles.listGroup}>
              <ListGroup.Item>
                <Link href="#instagram">instagram</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#fatcebook">facebook</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#linkedin">linkedin</Link>
              </ListGroup.Item>
            </ListGroup>
          </Stack>
          <div className={styles.breakLine}></div>
          <Stack direction="vertical">
            <h1>Entre em contato</h1>
            <ListGroup className={styles.listGroup}>
              <ListGroup.Item>(11) 12345-6789</ListGroup.Item>
              <ListGroup.Item>lcdesigns@gmail.com</ListGroup.Item>
            </ListGroup>
          </Stack>
          <div className={styles.iconTiger}>
            <Image src={blackTiger} alt="Tigre Preto" layout="responsive" />
          </div>
        </Stack>
        <Link
          href="https://www.linkedin.com/in/leonardo-alves-35a7281a0/"
          passHref
        >
          <a className={styles.createdBy} target="_blank">
            criado por @leonardo.jsx | 2022
          </a>
        </Link>
      </Container>
    </Layout>
  );
};

export default Footer;
