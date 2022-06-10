import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Stack } from 'react-bootstrap';
import styles from './styles.module.scss';
import { SocialMedia } from './context';
import bannerEnterprise from '../../assets/images/banner.jpg';
import Layout from '../Layout';

const AboutEnterprise: NextPage = () => {
  return (
    <Layout id="about-enterprise">
      <Container
        fluid
        className={`${styles.aboutEnterprise} defaultContainer px-0`}
      >
        <div className="mx-auto">
          <div className={`${styles.aboutImg} text-center bg-dark`}>
            <Image src={bannerEnterprise} alt="Enterprise" layout="fill" />
          </div>

          <Stack gap={5} className="w-75 mx-auto my-3">
            <p className="text-left my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus expedita nostrum neque animi maxime, recusandae
              tempora! Aut minima obcaecati omnis ratione, a, quasi atque
              similique mollitia, et fugit minus! Laudantium. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Voluptatibus expedita
              nostrum neque animi maxime, recusandae tempora! Aut minima
              obcaecati omnis ratione, a, quasi atque similique mollitia, et
              fugit minus! Laudantium. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptatibus expedita nostrum neque animi
              maxime, recusandae tempora! Aut minima obcaecati omnis ratione, a,
              quasi atque similique mollitia, et fugit minus! Laudantium.
            </p>

            <div className={styles.socialMedia}>
              {SocialMedia.map((medias, index) => {
                return medias.active ? (
                  <span key={index} className={`${styles.medias} mx-2`}>
                    <Link href={medias.link}>
                      <Image
                        key={index}
                        src={medias.badge}
                        alt={medias.name}
                        width="34px"
                        height="34px"
                      />
                    </Link>
                  </span>
                ) : (
                  false
                );
              })}
            </div>
          </Stack>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutEnterprise;
