import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Stack } from 'react-bootstrap';
import { SocialMedia } from './context';
import Layout from '../Layout';

const AboutMe: NextPage = () => {
  return (
    <Layout id="about-me">
      <Container className={'defaultContainer'}>
        <div>
          <p className="text-center">
            <Image
              src="https://avatars.githubusercontent.com/u/50511799?s=400&amp;u=3c0bb62e2e8db042df347034b86f4fa89977e2e0&amp;v=4"
              alt="Designer"
              width="160px"
              height="160px"
              className="rounded-circle"
            />
          </p>

          <Stack gap={5} className="w-75 mx-auto my-4">
            <Stack gap={2} className="text-center font-primary">
              <h3>Nome Designer</h3>
              <h5>Profissão designer</h5>
            </Stack>

            <p className="text-left font-secondary font-italic">
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

            <div className="text-right cursor-pointer">
              {SocialMedia.map((medias, index) => {
                return medias.active ? (
                  <span className="mx-2" key={index}>
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

export default AboutMe;
