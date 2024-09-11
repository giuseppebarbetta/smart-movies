import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from './styles'

function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info &&
          info.map((item, index) => (
            <SwiperSlide key={index}>
              <div>{item.original_title}</div>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default Slider
