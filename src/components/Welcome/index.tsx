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

const Welcome: NextPage = () => {
  return (
    <Layout id="welcome">
      <WelcomeContainer>
        <WelcomeVStack>
          <Image
            src="https://static.tumblr.com/anxftez/F4tq7ucmf/ezgif-5-4c3c2420295d.gif"
            alt="Logo-gif"
            width={350}
            height={350}
          />

          <WelcomeText>{'scrolla pra baixo :)'}</WelcomeText>

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
