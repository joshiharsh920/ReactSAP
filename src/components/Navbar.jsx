import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ weather }) {
  return (
    <nav className="fixed bg-gray-900 text-white px-8 py-4 shadow-md w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">{weather && (
          <div >
            <span>{weather.name}</span>
            <span> {Math.round(weather.main.temp)}°C</span>
            <span> {weather.weather[0].main}</span>
          </div>
        )}</h1>
        <ul className="flex space-x-6">
          <li><Link to='/home'>Home</Link></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><Link to='/services'>Services</Link></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>


    </nav>
  );
}

export default Navbar;