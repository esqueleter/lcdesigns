import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../Layout';
import {
  FooterContainer,
  FooterHStack,
  FooterVStack,
  FooterTitle,
  FooterList,
  FooterListItem,
  FooterCreatedBy,
} from './styles';
import { IFooter } from '../../interfaces/IFooter';

const Footer: NextPage<{ data: IFooter }> = ({ data }) => {
  return (
    <Layout id="footer" style={{ backgroundColor: '#212529' }}>
      <FooterContainer>
        <FooterHStack>
          <FooterVStack>
            <FooterTitle>Menu</FooterTitle>

            <FooterList>
              <FooterListItem>
                <Link href="#welcome">ínicio</Link>
              </FooterListItem>
              <FooterListItem>
                <Link href="#projects">projetos</Link>
              </FooterListItem>
              <FooterListItem>
                <Link href="#about-me">designer</Link>
              </FooterListItem>
              <FooterListItem>
                <Link href="#contact-me">contato</Link>
              </FooterListItem>
            </FooterList>
          </FooterVStack>

          <FooterVStack>
            <FooterTitle>Redes sociais</FooterTitle>
            <FooterList>
              {data.socialMedias.map((value, index) => {
                return (
                  <FooterListItem key={index}>
                    <Link href={value.socialMediaLink}>
                      {value.socialMediaName}
                    </Link>
                  </FooterListItem>
                );
              })}
            </FooterList>
          </FooterVStack>

          <FooterVStack>
            <FooterTitle>Entre em contato</FooterTitle>
            <FooterList>
              {data.contactMe.map((value, index) => {
                return <FooterListItem key={index}>{value}</FooterListItem>;
              })}
            </FooterList>
          </FooterVStack>
        </FooterHStack>
      </FooterContainer>
      <Link
        href="https://www.linkedin.com/in/leonardo-alves-35a7281a0/"
        passHref
      >
        <FooterCreatedBy target="_blank">
          criado por @leonardo.jsx | 2022
        </FooterCreatedBy>
      </Link>
    </Layout>
  );
};

export default Footer;
