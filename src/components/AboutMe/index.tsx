import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SocialMedia } from './context';
import Layout from '../Layout';
import {
  AboutMeContainer,
  AboutMeAvatarHolder,
  AboutMeStack,
  AboutMeTextWrapper,
  AboutMeText,
  AboutMeSocialMediaWrapper,
  AboutMeSocialMediaItem,
} from './styles';

const AboutMe: NextPage = () => {
  return (
    <Layout id="about-me">
      <AboutMeContainer>
        <AboutMeStack>
          <AboutMeAvatarHolder>
            <Image
              src="https://avatars.githubusercontent.com/u/50511799?s=400&amp;u=3c0bb62e2e8db042df347034b86f4fa89977e2e0&amp;v=4"
              alt="Designer"
              layout="fill"
            />
          </AboutMeAvatarHolder>

          <AboutMeTextWrapper>
            <AboutMeText variant="title">Nome Designer</AboutMeText>
            <AboutMeText variant="subtitle">Profissão designer</AboutMeText>
          </AboutMeTextWrapper>
        </AboutMeStack>

        <AboutMeStack>
          <AboutMeText variant="longText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus expedita nostrum neque animi maxime, recusandae
            tempora! Aut minima obcaecati omnis ratione, a, quasi atque
            similique mollitia, et fugit minus! Laudantium. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Voluptatibus expedita
            nostrum neque animi maxime, recusandae tempora! Aut minima obcaecati
            omnis ratione, a, quasi atque similique mollitia, et fugit minus!
          </AboutMeText>
        </AboutMeStack>

        <AboutMeStack>
          <AboutMeSocialMediaWrapper>
            {SocialMedia.map((medias, index) => {
              return medias.active ? (
                <Link href={medias.link} key={index}>
                  <AboutMeSocialMediaItem as={medias.badge} />
                </Link>
              ) : (
                false
              );
            })}
          </AboutMeSocialMediaWrapper>
        </AboutMeStack>
      </AboutMeContainer>
    </Layout>
  );
};

export default AboutMe;
