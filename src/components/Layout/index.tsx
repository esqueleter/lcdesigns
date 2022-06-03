import type { NextPage } from 'next';
import styles from './styles.module.scss';
const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
