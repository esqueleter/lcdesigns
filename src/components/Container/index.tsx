import type { NextPage } from 'next';
import Welcome from "../Welcome";
import Projects from '../Projects';
import ScrollTop from '../ScrollTop';
import AboutMe from '../AboutMe';
import AboutEnterprise from '../AboutEnterprise';

const Container: NextPage = () => {
  return (
   <>
      <Welcome/>
      <Projects/>
      <AboutMe/>
      <AboutEnterprise/>
      <ScrollTop/>
   </>
  )
}

export default Container
