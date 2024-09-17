import api from './api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getPopularPerson() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getTrailerMovie(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results[0]
}

export async function getCreditsMovie(movieId) {
  const { data } = await api.get(`/movie/${movieId}/credits`)

  return data
}

export async function getSimilarMovie(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}

export async function getDetailsMovie(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}
