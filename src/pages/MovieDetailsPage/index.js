import Loader from 'react-loader-spinner'
import useFetch from '../../custom-hook/useFetch'
import CastCard from '../../components/CastCard'

import './index.css'

const MovieDetailsPage = ({match}) => {
  const {movieid} = match.params
  const {data, isLoading, error} = useFetch([
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=0793a4a33a7a740c5b2bf11b2e89e9d7&language=en-US`,
    `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=0793a4a33a7a740c5b2bf11b2e89e9d7&language=en-US`,
  ])
  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      </div>
    )
  }

  if (error) {
    return <p>Error : {error}</p>
  }
  const movieDetails = data[0]
  const castDetails = data[1]
  // console.log('Movie Details =>', movieDetails)
  // console.log('Cast Details =>', castDetails)
  // console.log('Window Obj', window)

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="movie-details-poster-img"
        />
        <div className="movie-details-content">
          <div className="movie-head">
            <h1 className="movie-title">{movieDetails.title}</h1>
            <p>Rating ⭐ {movieDetails.vote_average.toFixed(1)}</p>
          </div>
          <p>
            <b>Genre : </b>
            {movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
          <p>
            <b>Duration :</b>{' '}
            {`${Math.floor(movieDetails.runtime / 60)}h ${
              movieDetails.runtime % 60
            }m`}
          </p>
          <p>
            <b>Release Date :</b> {movieDetails.release_date}
          </p>
          <p className="overview">
            <b>Overview :</b> {movieDetails.overview}
          </p>
          <button
            type="button"
            className="back-btn"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
      <div className="cast-details">
        <h2>Cast</h2>
        <ul className="cast-list-container">
          {castDetails.cast.map(cast => (
            <CastCard key={cast.cast_id} cast={cast} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MovieDetailsPage
