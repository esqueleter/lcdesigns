import type { NextPage } from 'next';
import Image from 'next/image';
import { Link } from 'react-scroll';
import arrowScrollTop from '../../assets/icons/arrowScrollTop.svg';
import styles from './styles.module.scss';

const ScrollTop: NextPage<{ scrollBarState: boolean }> = ({
  scrollBarState,
}) => {
  return (
    <>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={200}
        className={`${styles.scrollTop} ${
          scrollBarState && styles.on
        } rounded-circle bg-black m-3`}
      >
        <Image src={arrowScrollTop} alt="Scroll Top" layout="fill" />
      </Link>
    </>
  );
};

export default ScrollTop;
