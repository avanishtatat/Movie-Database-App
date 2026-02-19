import {useState} from 'react'
import Loader from 'react-loader-spinner'
import useFetch from '../../custom-hook/useFetch'
import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'
import '../page.css'

const UpcomingMoviesPage = () => {
  const [page, setPage] = useState(1)
  const {data, isLoading, error} = useFetch([
    `https://api.themoviedb.org/3/movie/upcoming?api_key=0793a4a33a7a740c5b2bf11b2e89e9d7&language=en-US&page=${page}`,
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
  return (
    <div className="movie-container">
      <h1>Upcoming</h1>
      <ul className="movie-content">
        {data[0].results.map(movie => (
          <MovieCard
            key={movie.id}
            movieDetails={{
              id: movie.id,
              posterPath: movie.poster_path,
              title: movie.title,
              voteAvg: movie.vote_average,
            }}
          />
        ))}
      </ul>
      <Pagination
        page={data[0].page}
        totalPage={data[0].total_pages}
        setPage={setPage}
      />
    </div>
  )
}

export default UpcomingMoviesPage
