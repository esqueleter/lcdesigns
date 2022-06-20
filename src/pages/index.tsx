import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { HomeContainer } from '../styles/styles.home';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import ScrollTop from '../components/ScrollTop';
import AboutMe from '../components/AboutMe';
import Navigation from '../components/Navigation';
import AboutEnterprise from '../components/AboutEnterprise';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const [navbarTheme, setNavbarTheme] = useState(false);
  const [scrollBarState, setScrollBarState] = useState(false);

  const controlNavbar = () => {
    let scrollValue = document.querySelector('#home')?.scrollTop as number;
    let documentSize = document.querySelector('#home')?.clientWidth as number;

    if (scrollValue >= 200) {
      setNavbarTheme(true);
      setScrollBarState(true);
      if (documentSize > 380 && documentSize < 1024) {
        if (scrollValue >= 4000) {
          setNavbarTheme(false);
          setScrollBarState(false);
        }
      } else {
        if (documentSize < 380) {
          if (scrollValue >= 3000) {
            setNavbarTheme(false);
            setScrollBarState(false);
          }
        }
      }

      if (documentSize >= 1024 && documentSize < 1600) {
        if (scrollValue >= 3000) {
          setNavbarTheme(false);
          setScrollBarState(false);
        }
      } else {
        if (documentSize >= 1600) {
          if (scrollValue >= 4000) {
            setNavbarTheme(false);
            setScrollBarState(false);
          }
        }
      }
    } else {
      setNavbarTheme(false);
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
      <title>LC Designs</title>
      <Navigation navbarState={navbarTheme} />

      <HomeContainer id="home">
        <Welcome />

        <Projects />

        <AboutMe />

        <AboutEnterprise />

        <ContactMe />
        <Footer />
      </HomeContainer>

      <ScrollTop scrollBarState={scrollBarState} />
    </>
  );
};

export default Home;
