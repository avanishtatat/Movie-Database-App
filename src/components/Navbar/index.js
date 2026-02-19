import {Link, withRouter} from 'react-router-dom'
import {useContext, useState, useRef, useEffect} from 'react'
import {CiSearch} from 'react-icons/ci'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {SearchContext} from '../../context/searchContext'
import './index.css'

const Navbar = ({history}) => {
  // console.log(history)
  const {pathname} = history.location
  const {input, setInput, search, setSearch} = useContext(SearchContext)
  const [menu, setMenu] = useState(false)
  const [searchBox, setSearchBox] = useState(false)
  const menuRef = useRef(null)
  const searchRef = useRef(null)

  useEffect(() => {
    setMenu(false)
  }, [pathname])

  useEffect(() => {
    setSearchBox(false)
  }, [search])

  useEffect(() => {
    function handleClickOutsideSearchBox(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchBox(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutsideSearchBox)
    return () =>
      document.removeEventListener('mousedown', handleClickOutsideSearchBox)
  }, [])

  useEffect(() => {
    function handleClickOutsideMenu(e) {
      // console.log('MOUSE DOWN EVENT triggers...')
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutsideMenu)
    return () =>
      document.removeEventListener('mousedown', handleClickOutsideMenu)
  }, [])
  return (
    <>
      <nav className="navbar">
        <h1 className="moviedb-name">movieDB</h1>

        <div className="link-container">
          <div className="search-container">
            <input
              value={input}
              className="search-input"
              type="search"
              placeholder="Search for 'Movies'"
              onChange={e => setInput(e.target.value)}
            />
            <Link to={input && '/searched-movies'} className="link-item">
              <button
                type="button"
                className="search-button"
                onClick={() => {
                  if (input) {
                    setSearch(input)
                  }
                }}
              >
                <CiSearch size={18} />
              </button>
            </Link>
          </div>
          <Link to="/" className="link-item">
            <p
              style={{color: pathname === '/' ? '#000' : ''}}
              className="nav-link"
            >
              Popular Movies
            </p>
          </Link>
          <Link to="/top-rated" className="link-item">
            <p
              style={{color: pathname === '/top-rated' ? '#000' : ''}}
              className="nav-link"
            >
              Top Rated Movies
            </p>
          </Link>
          <Link to="/upcoming" className="link-item">
            <p
              style={{color: pathname === '/upcoming' ? '#000' : ''}}
              className="nav-link"
            >
              Upcoming Movies
            </p>
          </Link>
        </div>
        <div className="mobile-link-container">
          <div className="searchbox-container" ref={searchRef}>
            <button
              type="button"
              className="buttons"
              onClick={() => setSearchBox(!searchBox)}
            >
              {!searchBox ? <CiSearch size={20} /> : <IoMdClose size={20} />}
            </button>
            {searchBox && (
              <div className="search-box">
                <input
                  value={input}
                  className="search-input"
                  type="search"
                  placeholder="Search for 'Movies'"
                  onChange={e => setInput(e.target.value)}
                />
                <Link to={input && '/searched-movies'} className="link-item">
                  <button
                    type="button"
                    className="search-button"
                    onClick={() => {
                      if (input) {
                        setSearch(input)
                      }
                    }}
                  >
                    <CiSearch size={18} />
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="hamburger-container" ref={menuRef}>
            <button
              type="button"
              className="buttons"
              onClick={() => setMenu(!menu)}
            >
              <GiHamburgerMenu size={18} />
            </button>
            {menu && (
              <div className="menu-dialog-box">
                <Link to="/" className="link-item">
                  <p
                    style={{color: pathname === '/' ? '#000' : ''}}
                    className="nav-link"
                  >
                    Popular Movies
                  </p>
                </Link>
                <Link to="/top-rated" className="link-item">
                  <p
                    style={{color: pathname === '/top-rated' ? '#000' : ''}}
                    className="nav-link"
                  >
                    Top Rated Movies
                  </p>
                </Link>
                <Link to="/upcoming" className="link-item">
                  <p
                    style={{color: pathname === '/upcoming' ? '#000' : ''}}
                    className="nav-link"
                  >
                    Upcoming Movies
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Navbar)
