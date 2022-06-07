import type { NextPage } from 'next';
import Image from 'next/image';
import { NavLink } from 'react-bootstrap';
import arrowScrollTop from '../../assets/icons/arrowScrollTop.svg';
import styles from './styles.module.scss';

const ScrollTop: NextPage<{ scrollBarState: boolean }> = ({
  scrollBarState,
}) => {
  return (
    <>
      <NavLink
        href="#welcome"
        className={`${styles.scrollTop} ${
          scrollBarState && styles.on
        } rounded-circle bg-black m-3`}
      >
        <Image src={arrowScrollTop} alt="Scroll Top" layout="fill" />
      </NavLink>
    </>
  );
};

export default ScrollTop;
