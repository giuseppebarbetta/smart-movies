import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../Modal'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import * as C from './styles'

function Home() {
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [popularPerson, setPopularPerson] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[1])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovies(results)
    }

    async function getTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      setTopSeries(results)
    }

    async function getPopularSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      setPopularSeries(results)
    }

    async function getPopularPerson() {
      const {
        data: { results }
      } = await api.get('/person/popular')

      setPopularPerson(results)
    }

    getMovies()
    getTopMovies()
    getTopSeries()
    getPopularSeries()
    getPopularPerson()
  }, [])

  return (
    <>
      {movie && (
        <C.Background img={getImages(movie.backdrop_path)} alt="capa do filme">
          {showModal && (
            <Modal setShowModal={setShowModal} movieId={movie.id} />
          )}
          <C.Container>
            <C.Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <C.ContainerButtons>
                <Button model={'primary'}>Assistir ao filme</Button>
                <Button onClick={() => setShowModal(true)}>
                  Assistir ao trailer
                </Button>
              </C.ContainerButtons>
            </C.Info>
            <C.Poster>
              <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
            </C.Poster>
          </C.Container>
        </C.Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
      {popularPerson && (
        <Slider info={popularPerson} title={'Artistas Populares'} />
      )}
    </>
  )
}

export default Home
