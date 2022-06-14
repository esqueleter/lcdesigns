import type { NextPage } from 'next';
import Link from 'next/link';
import { ImArrowUp2 } from 'react-icons/im';
import { ScrollTopButton, ScrollTopIcon } from './styles';

const ScrollTop: NextPage<{ scrollBarState: boolean }> = ({
  scrollBarState,
}) => {
  return (
    <>
      <Link href="#welcome">
        <ScrollTopButton className={scrollBarState && 'show'}>
          <ScrollTopIcon as={ImArrowUp2} />
        </ScrollTopButton>
      </Link>
    </>
  );
};

export default ScrollTop;
