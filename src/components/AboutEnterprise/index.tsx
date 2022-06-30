import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { IAboutEnterprisePages } from '../../interfaces/IAboutEnterprise';
import Layout from '../Layout';
import {
  AboutEnterpriseContainer,
  AboutEnterpriseBannerHolder,
  AboutEnterpriseStack,
  AboutEnterpriseText,
  AboutEnterpriseSocialMediaWrapper,
  AboutEnterpriseSocialMediaItem,
} from './styles';
import { socialMediasIcons } from '../../contexts/SocialMediaContext';

const AboutEnterprise: NextPage<{ data: IAboutEnterprisePages }> = ({
  data,
}) => {
  const socialMedias = socialMediasIcons(data.socialMedias);

  return (
    <Layout id="about-enterprise">
      <AboutEnterpriseContainer>
        <AboutEnterpriseStack>
          <AboutEnterpriseBannerHolder>
            <Image src={data.banner.url} alt="Enterprise" layout="fill" />
          </AboutEnterpriseBannerHolder>
        </AboutEnterpriseStack>

        <AboutEnterpriseStack>
          <AboutEnterpriseText
            dangerouslySetInnerHTML={{ __html: data.content.html }}
          />
        </AboutEnterpriseStack>

        <AboutEnterpriseStack>
          <AboutEnterpriseSocialMediaWrapper>
            {socialMedias.map((value) => {
              if (value.socialMediaStatus) {
                return (
                  <Link
                    href={value.socialMediaLink}
                    key={value.socialMediaName}
                    passHref
                  >
                    <a target="_blank">
                      <AboutEnterpriseSocialMediaItem
                        as={value.socialMediaIcon}
                      />
                    </a>
                  </Link>
                );
              } else {
                return '';
              }
            })}
          </AboutEnterpriseSocialMediaWrapper>
        </AboutEnterpriseStack>
      </AboutEnterpriseContainer>
    </Layout>
  );
};

export default AboutEnterprise;
