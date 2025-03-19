import React from 'react'

export default function Weather(props) {
    const { data } = props
    return (
        <div className='d-flex flex-column gap-5 mt-4'>
            <div className='row'>
                <div className='col-12 col-md-6 d-flex flex-column gap-1 text-start'>
                    <h3 className='m-0'>{data.name}, {data.sys.country}</h3>
                    <h4 className='m-0'>{data.weather[0].description}</h4>
                </div>
                <div className='col-12 col-md-6 d-flex justify-content-end'>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon" />
                </div>
            </div>
            <div className='row d-flex align-items-center'>
                <div className='col-12 col-md-6 d-flex flex-column gap-1 text-start'>
                    <h1 className='m-0' style={{ fontSize: '7rem' }}>{Math.round(data.main.temp - 273.15)} °C</h1>
                </div>
                <div className='col-12 col-md-6 d-flex flex-column gap-1 text-start'>
                    <div className='d-flex'><p className='fs-5 m-0 w-50'>Feels Like</p><h4 className='m-0 w-50 text-center'>{Math.round(data.main.feels_like - 273.15)} °C</h4></div>
                    <div className='d-flex'><p className='fs-5 m-0 w-50'>Humidity</p><h4 className='m-0 w-50 text-center'>{data.main.humidity}%</h4></div>
                    <div className='d-flex'><p className='fs-5 m-0 w-50'>wind Speed</p><h4 className='m-0 w-50 text-center'>{data.wind.speed.toFixed()} KPH</h4></div>
                    <div className='d-flex'><p className='fs-5 m-0 w-50'>Pressure</p><h4 className='m-0 w-50 text-center'>{data.main.pressure} hPa</h4></div>
                </div>
            </div>
        </div>
    )
}
