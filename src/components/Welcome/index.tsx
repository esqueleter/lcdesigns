import type { NextPage } from 'next'
import Image from 'next/image'
import {Container, Stack} from "react-bootstrap"
import styles from "./styles.module.scss"
import arrowDown from "../../assets/icons/arrowDown.svg"
import {Link} from "react-scroll"

const Welcome: NextPage = () => {
  return (
   <>
        <Container id="home" fluid className={`${styles.welcome} min-vh-100 container-xxl`} >
          <Stack gap={4} className="d-flex col-md-4 mx-auto justify-content-center align-items-center vh-100"> 
          
            <Image src="https://static.tumblr.com/anxftez/F4tq7ucmf/ezgif-5-4c3c2420295d.gif" alt="Logo-gif" width={350} height={350}/>

            <h3 className="text-white">Design text wrapper</h3>

            <Link to="projects" spy={false} smooth={true} offset={100} duration={300}>
              <Image src={arrowDown} width="45px" height="45px" alt="" className={styles.arrowDown}/>
            </Link>

          </Stack>
        </Container>
   </>
  )
}

export default Welcome
