import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SocialMedia } from './context';
import bannerEnterprise from '../../assets/images/banner.jpg';
import Layout from '../Layout';
import {
  AboutEnterpriseContainer,
  AboutEnterpriseBannerHolder,
  AboutEnterpriseStack,
  AboutEnterpriseText,
  AboutEnterpriseSocialMediaWrapper,
  AboutEnterpriseSocialMediaItem,
} from './styles';

const AboutEnterprise: NextPage = () => {
  return (
    <Layout id="about-enterprise">
      <AboutEnterpriseContainer>
        <AboutEnterpriseStack>
          <AboutEnterpriseBannerHolder>
            <Image src={bannerEnterprise} alt="Enterprise" layout="fill" />
          </AboutEnterpriseBannerHolder>
        </AboutEnterpriseStack>

        <AboutEnterpriseStack>
          <AboutEnterpriseText>
            Lorem iAboutEnterpriseTextsum dolor sit, amet consectetur
            adipisicing elit. Voluptatibus expedita nostrum neque animi maxime,
            recusandae tempora! Aut minima obcaecati omnis ratione, a, quasi
            atque similique mollitia, et fugit minus! Laudantium. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Voluptatibus expedita
            nostrum neque animi maxime, recusandae tempora! Aut minima obcaecati
          </AboutEnterpriseText>
        </AboutEnterpriseStack>

        <AboutEnterpriseStack>
          <AboutEnterpriseSocialMediaWrapper>
            {SocialMedia.map((medias, index) => {
              return medias.active ? (
                <Link href={medias.link} key={index}>
                  <AboutEnterpriseSocialMediaItem as={medias.badge} />
                </Link>
              ) : (
                false
              );
            })}
          </AboutEnterpriseSocialMediaWrapper>
        </AboutEnterpriseStack>
      </AboutEnterpriseContainer>
    </Layout>
  );
};

export default AboutEnterprise;
