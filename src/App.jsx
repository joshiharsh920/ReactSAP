import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainPage from './components/MainPage'
import Services from './components/Services';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const [weather, setWeather] = useState(null);
  const WEATHER_API_KEY = '983ff4f9d3d6d34f89b99e0ed0525f60';
  const hidepathname = '/services';

  function userLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const apiKey = "913f164ecbb1c0d670e0375fd890644b";

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      )
        .then(
          (res) => res.json()
        )
        .then(
          (data) => setWeather(data)
        );
    });
  }

  return (
    <>
      {!location.pathname.includes(hidepathname) && <Navbar weather={weather} />}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<MainPage />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App
