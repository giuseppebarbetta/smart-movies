import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../Modal'
import {
  getMovies,
  getPopularPerson,
  getPopularSeries,
  getTopMovies,
  getTopSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import * as C from './styles'

function Home() {
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [popularPerson, setPopularPerson] = useState()
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPerson()
      ])
        .then(([movie, topMovie, topSeries, popularSeires, popularPerson]) => {
          setMovie(movie)
          setTopMovies(topMovie)
          setTopSeries(topSeries)
          setPopularSeries(popularSeires)
          setPopularPerson(popularPerson)
        })
        .catch((err) => console.error(err))
    }

    getAllData()
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
                <Button
                  onClick={() => navigate(`/detalhes/${movie.id}`)}
                  model={'primary'}
                >
                  Assistir ao filme
                </Button>
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
