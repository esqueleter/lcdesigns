import type { NextPage } from 'next';
import { StyleHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type ILayout = {
  style?: any;
  children: React.ReactNode;
  id: string;
};

const Layout: NextPage<ILayout> = ({ children, id, style }) => {
  return (
    <>
      <section style={style} className={styles.layout}>
        <a className={styles.anchor} id={id}></a>
        {children}
      </section>
    </>
  );
};

export default Layout;
