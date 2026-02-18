import Loader from 'react-loader-spinner'
import {useContext, useState} from 'react'
import useFetch from '../../custom-hook/useFetch'
import MovieCard from '../../components/MovieCard'
import {SearchContext} from '../../context/searchContext'
import Pagination from '../../components/Pagination'
import '../page.css'

const SearchedMoviesPage = () => {
  const {search} = useContext(SearchContext)
  const [page, setPage] = useState(1)
  const {data, isLoading, error} = useFetch([
    `https://api.themoviedb.org/3/search/movie?api_key=0793a4a33a7a740c5b2bf11b2e89e9d7&language=en-US&query=${search}&page=${page}`,
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
      <ul className="movie-content">
        {data[0].results.map(movie => (
          <MovieCard key={movie.id} movieDetails={movie} />
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
export default SearchedMoviesPage
