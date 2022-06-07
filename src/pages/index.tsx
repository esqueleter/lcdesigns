import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import ScrollTop from '../components/ScrollTop';
import AboutMe from '../components/AboutMe';
import Navigation from '../components/Navigation';
import AboutEnterprise from '../components/AboutEnterprise';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollBarState, setScrollBarState] = useState(false);

  const controlNavbar = () => {
    let scrollValue = document.querySelector('#home')?.scrollTop as number;

    if (scrollValue >= 200) {
      setShowNavbar(false);
      setScrollBarState(true);
    } else {
      setShowNavbar(true);
      setScrollBarState(false);
    }
  };

  useEffect(() => {
    document.querySelector('#home')?.addEventListener('scroll', controlNavbar);

    return () => {
      document
        .querySelector('#home')
        ?.removeEventListener('scroll', controlNavbar);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navigation navbarState={showNavbar} />

      <div id="home" className={styles.home}>
        <Welcome />

        <Projects />

        <AboutMe />

        <AboutEnterprise />
      </div>

      <ScrollTop scrollBarState={scrollBarState} />
    </>
  );
};

export default Home;
