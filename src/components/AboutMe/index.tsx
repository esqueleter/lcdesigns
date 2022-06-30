import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../Layout';
import {
  AboutMeContainer,
  AboutMeAvatarHolder,
  AboutMeStack,
  AboutMeHeadText,
  AboutMeTextWrapper,
  AboutMeText,
  AboutMeSocialMediaWrapper,
  AboutMeSocialMediaItem,
} from './styles';
import { IAboutMePages } from '../../interfaces/IAboutMe';
import { socialMediasIcons } from '../../contexts/SocialMediaContext';
import { ISocialMedias } from '../../interfaces/ISocialMedias';

const AboutMe: NextPage<{ data: IAboutMePages }> = ({ data }) => {
  const socialMedias = socialMediasIcons(data.socialMedias);
  return (
    <Layout id="about-me">
      <AboutMeContainer>
        <AboutMeStack>
          <AboutMeAvatarHolder>
            <Image src={data.avatar.url} alt="Designer" layout="fill" />
          </AboutMeAvatarHolder>

          <AboutMeTextWrapper>
            <AboutMeHeadText>{data.title}</AboutMeHeadText>
            <AboutMeHeadText fontSize={'16px'}>{data.subtitle}</AboutMeHeadText>
          </AboutMeTextWrapper>
        </AboutMeStack>

        <AboutMeStack>
          <AboutMeText
            variant="longText"
            dangerouslySetInnerHTML={{ __html: data.content.html }}
          />
        </AboutMeStack>

        <AboutMeStack>
          <AboutMeSocialMediaWrapper>
            {socialMedias.map((value) => {
              if (value.socialMediaStatus) {
                return (
                  <Link
                    href={value.socialMediaLink}
                    key={value.socialMediaName}
                    passHref
                  >
                    <a target="_blank">
                      <AboutMeSocialMediaItem as={value.socialMediaIcon} />
                    </a>
                  </Link>
                );
              } else {
                return '';
              }
            })}
          </AboutMeSocialMediaWrapper>
        </AboutMeStack>
      </AboutMeContainer>
    </Layout>
  );
};

export default AboutMe;
