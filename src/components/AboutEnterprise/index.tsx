import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {Container, Stack} from "react-bootstrap"
import styles from "./styles.module.scss"
import { SocialMedia } from './context'


const AboutEnterprise: NextPage = () => {
  return (
   <>
        <Container fluid className={`${styles.aboutEnterprise} px-0`}>
              <div className="mx-auto">
                <div className={`${styles.aboutImg} text-center bg-dark`}>
                  <Image 
                    src="https://avatars.githubusercontent.com/u/50511799?s=400&amp;u=3c0bb62e2e8db042df347034b86f4fa89977e2e0&amp;v=4" 
                    alt="Designer" 
                    width="100%"
                    height="100%"
                    />
                </div>
               

                <Stack gap={5} className="w-75 mx-auto my-3">
                      
                    <p className="text-left my-4">
                      Lorem ipsum dolor sit, 
                      amet consectetur adipisicing elit. 
                      Voluptatibus expedita nostrum neque
                      animi maxime, recusandae tempora! Aut 
                      minima obcaecati omnis ratione, a, quasi 
                      atque similique mollitia, et fugit minus! 
                      Laudantium.   
                      Lorem ipsum dolor sit, 
                      amet consectetur adipisicing elit. 
                      Voluptatibus expedita nostrum neque
                      animi maxime, recusandae tempora! Aut 
                      minima obcaecati omnis ratione, a, quasi 
                      atque similique mollitia, et fugit minus! 
                      Laudantium.   

                      Lorem ipsum dolor sit, 
                      amet consectetur adipisicing elit. 
                      Voluptatibus expedita nostrum neque
                      animi maxime, recusandae tempora! Aut 
                      minima obcaecati omnis ratione, a, quasi 
                      atque similique mollitia, et fugit minus! 
                      Laudantium.   
 
                    </p>

                    <div className="text-right">
                        {SocialMedia.map((medias, index)=>{
                          return medias.active ? (
                            <span className={`${styles.medias} mx-2`}>
                              <Link href={medias.link}>
                                <Image key={index} src={medias.badge} alt={medias.name} width="34px" height="34px" />
                              </Link>
                            </span>
                          ): false 
                          
                        })}
                    </div>
                   
                </Stack>
              </div>

              
        </Container>
   </>
  )
}

export default AboutEnterprise
