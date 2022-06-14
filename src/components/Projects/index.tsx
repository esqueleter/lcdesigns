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
            overflow: 'hidden',
          }}
          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
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

        <Button className={`${styles.seeMore} d-flex mx-auto my-4`}>
          <Link href="https://www.instagram.com/lcdesigns.art/" passHref>
            <a target="_blank">
              todos os projetos <span>{'>>'}</span>
            </a>
          </Link>
        </Button>
      </Container>
    </Layout>
  );
};

export default Projects;
