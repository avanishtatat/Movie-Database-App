import {MdSkipNext, MdSkipPrevious} from 'react-icons/md'
import './index.css'

const Pagination = ({page, totalPage, setPage}) => {
  const incrementPage = () => {
    if (page < totalPage) {
      setPage(prevPage => prevPage + 1)
    }
  }
  const decrementPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }
  return (
    <div className="pagination-container">
      <button
        type="button"
        className="pagination-button"
        onClick={decrementPage}
        disabled={page === 1}
      >
        <MdSkipPrevious />
        <span>Previous</span>
      </button>
      <span className="current-page">{page}</span>
      <button
        type="button"
        className="pagination-button"
        onClick={incrementPage}
        disabled={page === totalPage}
      >
        <span>Next</span>
        <MdSkipNext />
      </button>
    </div>
  )
}

export default Pagination
