import {createContext, useState} from 'react'

export const SearchContext = createContext(null)

const SearchProvider = ({children}) => {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{input, setInput, search, setSearch}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
