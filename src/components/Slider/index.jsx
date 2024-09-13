import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../../Card'
import { Container } from './styles'

import 'swiper/css'

function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={35}
        slidesPerView={1}
        breakpoints={{
          620: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          931: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          1225: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          1525: {
            slidesPerView: 5,
            spaceBetween: 50
          },
          1750: {
            slidesPerView: 6,
            spaceBetween: 50
          }
        }}
        className="mySwiper"
      >
        {info &&
          info.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default Slider
