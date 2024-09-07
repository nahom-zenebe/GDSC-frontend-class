import React, { useState } from 'react';
import './weather.css';
import { IoMdSunny } from 'react-icons/io';

function Weather() {
    const [name, setName] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
 

    const api=process.env.REACT_APP_api;
            console.log(api)
    

    async function fetchApi(city) {
        setLoading(true);
        setError(null);
        try {
          
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    function searchApp() {
        if (name.trim()) {
            fetchApi(name);
        }
    }

    return (
        <div className='main-card'>
            <div className='info-component'>
                <h1 className='title'>
                    <IoMdSunny className='sun' /> Weather App
                </h1>
                {loading && <p className='loading'>Loading...</p>}
                {error && <p className='error'>{error}</p>}
                {weatherData && !loading && !error && (
                    <div className='info'>
                        {weatherData.weather && weatherData.weather.length > 0 && (
                            <div className='image-holder'>
                                <img
                                    className='weather-img'
                                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                    alt="Weather icon"
                                />
                            </div>
                        )}
                        <h1 className='city-name'>
                            City name: {weatherData.name}, {weatherData.sys.country}
                        </h1>
                        <p className='temp'>
                            Temperature: {weatherData.main.temp.toFixed()}℃ 
                        </p>
                        <p className='humidity'>
                            Humidity: {weatherData.main.humidity}%
                        </p>
                        <p className='wind'>
                            Wind Speed: {weatherData.wind.speed} KM/HR
                        </p>
                        {weatherData.weather && weatherData.weather.length > 0 && (
                            <p className='description'>
                                Description: {weatherData.weather[0].description}
                            </p>
                        )}
                    </div>
                )}
            </div>
            <div className='field-component'>
                <input
                    type='text'
                    value={name}
                    placeholder='Enter city name'
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <button onClick={searchApp}>Search</button>
            </div>
        </div>
    );
}

export default Weather;
