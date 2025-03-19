import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Weather from './components/Weather'

function App() {
  const [data, setData] = useState(null)
  const [city, setCity] = useState('')
  const [error, setError] = useState(null)

  async function getWeather(city) {
    if (!city) {
      setError('Please enter a city name!')
      return
    }

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    try {
      const response = await fetch(url)
      const apiData = await response.json()

      if (apiData.cod !== 200) {
        setError('City not found!')
        setData(null)
      } else {
        setData(apiData)
        setError(null)
      }
    } catch (error) {
      console.error(error)
      setError('Failed to fetch weather data. Please try again.')
    }
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  return (
    <div className='container w-50 text-center bg-info d-flex flex-column rounded-5 px-5 py-4 text-dark'>
      <h1 className='mb-4'>Weather app</h1>
      <input type='text' placeholder='Enter city name' className='form-control rounded-5 text-center fs-4' onChange={handleCity} />
      {error && <h4 className="text-danger my-3">{error}</h4>}
      <button className='btn btn-warning rounded-5 fs-5 fw-bold w-25 mx-auto my-4' onClick={() => getWeather(city)}>Get weather</button>
      {data && <Weather data={data} />}
    </div>
  )
}

export default App
