import type { NextPage } from 'next'
import Welcome from "../Welcome"
import Projects from '../Projects'
const Container: NextPage = () => {
  return (
   <>
      <Welcome/>
      <Projects/>
   </>
  )
}

export default Container
