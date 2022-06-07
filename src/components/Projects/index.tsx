import type { NextPage } from 'next';
import { Container, Stack, Button } from 'react-bootstrap';
import ImageCard from '../ImageCard';
import Link from 'next/link';
import Layout from '../Layout';

const Projects: NextPage = () => {
  return (
    <Layout id="projects">
      <Container fluid className={'defaultContainer'}>
        <h3 className="d-flex justify-content-center my-4">Projetos</h3>
        <Stack
          className="d-flex flex-wrap my-3 justify-content-center"
          direction="horizontal"
          gap={5}
        >
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </Stack>
        <Button className="d-flex mx-auto my-4">
          <Link href="/collections">Ver todos os projetos</Link>
        </Button>
      </Container>
    </Layout>
  );
};

export default Projects;
