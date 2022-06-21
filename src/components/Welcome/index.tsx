import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ImArrowDown2 } from 'react-icons/im';
import Layout from '../Layout';
import {
  WelcomeContainer,
  WelcomeVStack,
  WelcomeText,
  WelcomeButton,
  WelcomeIcon,
} from './styles';
import { IWelcomePages } from '../../interfaces/IWelcome';

const Welcome: NextPage<{ data: IWelcomePages }> = ({ data }) => {
  return (
    <Layout id="welcome" style={{ backgroundColor: '#212529' }}>
      <WelcomeContainer>
        <WelcomeVStack>
          <Image
            src={data.welcomeImage.url}
            alt="Logo-gif"
            width={350}
            height={350}
          />

          <WelcomeText>{data.welcomeText}</WelcomeText>

          <Link href="#projects">
            <WelcomeButton>
              <WelcomeIcon as={ImArrowDown2} />
            </WelcomeButton>
          </Link>
        </WelcomeVStack>
      </WelcomeContainer>
    </Layout>
  );
};

export default Welcome;
