import 'swiper/css';

import type { NextPage } from 'next';
import { Container, Stack, Button } from 'react-bootstrap';
import ImageCard from '../ImageCard';
import Link from 'next/link';
import Layout from '../Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import styles from './styles.module.scss';

const Projects: NextPage = () => {
  return (
    <Layout id="projects">
      <Container fluid className={`font-primary defaultContainer`}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          style={{
            maxWidth: '1000px',
          }}
        >
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>

          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
        </Swiper>

        <Button
          className="d-flex mx-auto my-4"
          style={{
            backgroundColor: '#212529',
            borderColor: '#212529',
            borderRadius: '2px',
          }}
        >
          <Link href="https://www.instagram.com/lcdesigns.art/" passHref>
            <a target="_blank" className={styles.seeMore}>
              Todos os projetos <span>{'>'}</span>
            </a>
          </Link>
        </Button>
      </Container>
    </Layout>
  );
};

export default Projects;
