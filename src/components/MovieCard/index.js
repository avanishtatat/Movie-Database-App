import {Link} from 'react-router-dom'

import './index.css'

const MovieCard = ({movieDetails}) => {
  const {id, poster_path, title} = movieDetails

  return (
    <li className="card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : 'https://dummyimage.com/300x450/1c1c1c/ffffff&text=No+Image'
        }
        alt={title}
        className="poster-img"
      />
      <div className="card-content">
        <span className="poster-name">{title}</span>
        <p>Rating ⭐ {movieDetails.vote_average.toFixed(1)}</p>
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
