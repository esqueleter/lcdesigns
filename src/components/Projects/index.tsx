import type { NextPage } from 'next'
import {Container, Stack, Button} from "react-bootstrap"
import ImageCard from '../ImageCard'
import Link from "next/link"

const Projects: NextPage = () => {
  return (
   <>
        <Container id="projects" fluid>
            <h3 className="d-flex justify-content-center my-5">Projetos</h3>
            <Stack className="d-flex flex-wrap my-3 justify-content-center" direction='horizontal' gap={5}>
              <ImageCard/>
              <ImageCard/>
              <ImageCard/>  
              <ImageCard/>
              <ImageCard/>
              <ImageCard/>  
            </Stack>
            <Button className="d-flex mx-auto my-4">
              <Link href="/collections">Ver todos os projetos</Link>
            </Button>
            
        </Container>
   </>
  )
}

export default Projects
