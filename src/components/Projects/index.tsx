import 'swiper/css';
import type { NextPage } from 'next';
import ImageCard from '../ImageCard';
import Link from 'next/link';
import Layout from '../Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { ProjectContainer, ProjectButton } from './styles';
import { HiChevronDoubleRight } from 'react-icons/hi';

const Projects: NextPage = () => {
  return (
    <Layout id="projects">
      <ProjectContainer>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          style={{
            maxWidth: '1000px',
            width: '100%',
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
        </Swiper>

        <ProjectButton rightIcon={<HiChevronDoubleRight />}>
          <Link href="https://www.instagram.com/lcdesigns.art/">
            todos os projetos
          </Link>
        </ProjectButton>
      </ProjectContainer>
    </Layout>
  );
};

export default Projects;
