import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getCreditsMovie,
  getDetailsMovie,
  getSimilarMovie,
  getTrailerMovie
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, Cover } from './styles'

function Detail() {
  const { id } = useParams()
  console.log(id)
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
          </Container>
        </>
      )}
    </>
  )
}

export default Detail
