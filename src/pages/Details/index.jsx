import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  getCreditsMovie,
  getDetailsMovie,
  getSimilarMovie,
  getTrailerMovie
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, ContainerMovies, Cover, Info } from './styles'

function Detail() {
  const { id } = useParams()
  const [trailerMovie, setTrailerMovie] = useState()
  const [creditsMovie, setCreditsMovie] = useState()
  const [similarMovie, setSimilarMovie] = useState()
  const [movieDetails, setMovieDetails] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getTrailerMovie(id),
        getCreditsMovie(id),
        getSimilarMovie(id),
        getDetailsMovie(id)
      ])
        .then(([trailer, credits, similar, details]) => {
          setTrailerMovie(trailer)
          setCreditsMovie(credits)
          setSimilarMovie(similar)
          setMovieDetails(details)
        })
        .catch((err) => console.error(err))
    }

    getAllData()
  }, [])

  return (
    <>
      {movieDetails && (
        <>
          <Background image={getImages(movieDetails.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movieDetails.poster_path)} />
            </Cover>
            <Info>
              <h2>{movieDetails.title}</h2>
              <SpanGenres genres={movieDetails.genres} />
              <p>{movieDetails.overview}</p>
              <div>
                <Credits credits={creditsMovie} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {trailerMovie &&
              trailerMovie.slice(0, 3).map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {similarMovie && (
            <Slider info={similarMovie} title={'Filmes Similares'} />
          )}
        </>
      )}
    </>
  )
}

export default Detail
