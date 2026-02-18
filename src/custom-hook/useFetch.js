import {useState, useEffect} from 'react'

const useFetch = urls => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const responses = await Promise.all(urls.map(url => fetch(url)))
        const jsonData = await Promise.all(responses.map(res => res.json()))
        setData(jsonData)
        setError(null)
      } catch (error) {
        console.error('Api call error', error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [JSON.stringify(urls)])

  return {data, error, isLoading}
}

export default useFetch
