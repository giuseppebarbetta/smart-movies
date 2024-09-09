import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import * as C from './styles'

function Home() {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[0])
    }

    getMovies()
  }, [])

  return (
    <>
      {movie && (
        <C.Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <C.Container>
            <C.Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Button>Assista agora</Button>
                <Button>Assista ao trailer</Button>
              </div>
            </C.Info>
            <C.Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="capa-do-filme"
              />
            </C.Poster>
          </C.Container>
        </C.Background>
      )}
    </>
  )
}

export default Home
