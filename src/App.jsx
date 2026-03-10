import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainPage from './components/MainPage'
import './index.css'
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
