import type { NextPage } from 'next';
import styles from './styles.module.scss';
const Layout: NextPage<{ children: React.ReactNode; id: string }> = ({
  children,
  id,
}) => {
  return (
    <>
      <section className={styles.layout}>
        <a className={styles.anchor} id={id}></a>
        {children}
      </section>
    </>
  );
};

export default Layout;
