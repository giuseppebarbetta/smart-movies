import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import * as C from './styles'

function Home() {
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[0])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovies(results)
    }

    getMovies()
    getTopMovies()
  }, [])

  return (
    <>
      {movie && (
        <C.Background img={getImages(movie.backdrop_path)} alt="capa do filme">
          <C.Container>
            <C.Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <C.ContainerButtons>
                <Button model={'primary'}>Assistir ao filme</Button>
                <Button>Assistir ao trailer</Button>
              </C.ContainerButtons>
            </C.Info>
            <C.Poster>
              <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
            </C.Poster>
          </C.Container>
        </C.Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
    </>
  )
}

export default Home
