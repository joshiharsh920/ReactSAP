import React from "react";

function Navbar() {
  return (
   <nav className="fixed bg-gray-900 text-white px-8 py-4 shadow-md w-full top-0 left-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <h1 className="text-2xl font-bold">WorkSpace</h1>
    <ul className="flex space-x-6">
      <li><a href="#home" className="hover:text-blue-400">Home</a></li>
      <li><a href="#about" className="hover:text-blue-400">About</a></li>
      <li><a href="#services" className="hover:text-blue-400">Services</a></li>
      <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;