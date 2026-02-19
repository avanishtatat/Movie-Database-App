import {Link} from 'react-router-dom'

import './index.css'

const MovieCard = ({movieDetails}) => {
  const {id, posterPath, title} = movieDetails

  return (
    <li className="card">
      <img
        src={
          posterPath
            ? `https://image.tmdb.org/t/p/original/${posterPath}`
            : 'https://dummyimage.com/300x450/1c1c1c/ffffff&text=No+Image'
        }
        alt={title}
        className="poster-img"
      />
      <div className="card-content">
        <span className="poster-name">{title}</span>
        <p>Rating ⭐ {movieDetails.voteAvg.toFixed(1)}</p>
      </div>
      <Link to={`/movies/${id}`} className="link-item">
        <button type="button" className="view-details-btn">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
