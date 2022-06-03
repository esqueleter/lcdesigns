import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import ScrollTop from '../components/ScrollTop';
import AboutMe from '../components/AboutMe';
import Navigation from '../components/Navigation';
import AboutEnterprise from '../components/AboutEnterprise';
const Home: NextPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollBarState, setScrollBarState] = useState(false);

  let doc = document.documentElement;
  let w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  const controlNavbar = () => {
    const toggleHeader = (direction: number, curScroll: number) => {
      if (direction === 2 && curScroll > 100) {
        setShowNavbar(false);
        setScrollBarState(true);
        prevDirection = direction;
      } else if (direction === 1) {
        setShowNavbar(true);
        setScrollBarState(false);
        prevDirection = direction;
      }
    };

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      direction = 2;
    } else if (curScroll < prevScroll) {
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    prevScroll = curScroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navigation navbarState={showNavbar} />
      <Welcome />

      <Projects />

      <AboutMe />

      <AboutEnterprise />

      <ScrollTop scrollBarState={scrollBarState} />
    </>
  );
};

export default Home;
