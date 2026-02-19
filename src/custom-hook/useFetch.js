import {useState, useEffect} from 'react'

const useFetch = urls => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const stringifiedUrls = JSON.stringify(urls)

  useEffect(() => {
    const getData = async () => {
      try {
        const responses = await Promise.all(urls.map(url => fetch(url)))
        const jsonData = await Promise.all(responses.map(res => res.json()))
        setData(jsonData)
        setError(null)
      } catch (err) {
        console.error('Api call error', err)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [stringifiedUrls])

  return {data, error, isLoading}
}

export default useFetch
