import {Switch, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import PopularMoviesPage from './pages/PopularMoviesPage'
import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import UpcomingMoviesPage from './pages/UpcomingMoviesPage'
import SearchedMoviesPage from './pages/SearchedMoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage'

// write your code here
// api_key = '0793a4a33a7a740c5b2bf11b2e89e9d7'
const App = () => (
  <div className="app-container">
    <Navbar />
    <Switch>
      <Route exact path="/" component={PopularMoviesPage} />
      <Route exact path="/top-rated" component={TopRatedMoviesPage} />
      <Route exact path="/upcoming" component={UpcomingMoviesPage} />
      <Route exact path="/movies/:movieid" component={MovieDetailsPage} />
      <Route exact path="/searched-movies" component={SearchedMoviesPage} />
    </Switch>
  </div>
)

export default App
