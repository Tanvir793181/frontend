import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faTrophy, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Brazil from './pages/Brazil';
import Madrid from './pages/Madrid';
import More from './pages/More';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faTrophy} className="h-6 w-6 text-yellow-500" />
            <NavLink to="/" className="ml-2 text-xl font-bold bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Maracanã to Bernabéu
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/"
              className={`transition-colors duration-200 ${
                isActive('/') ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={`transition-colors duration-200 ${
                isActive('/about') ? 'text-purple-500' : 'text-gray-600 hover:text-purple-500'
              }`}
            >
              About
            </NavLink>
            <NavLink 
              to="/brazil"
              className={`transition-colors duration-200 ${
                isActive('/brazil') ? 'text-green-500' : 'text-gray-600 hover:text-green-500'
              }`}
            >
              Brazil
            </NavLink>
            <NavLink 
              to="/madrid"
              className={`transition-colors duration-200 ${
                isActive('/madrid') ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              Real Madrid
            </NavLink>
            <NavLink 
              to="/more"
              className={`transition-colors duration-200 ${
                isActive('/more') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FontAwesomeIcon icon={faEllipsisVertical} className="h-5 w-5" />
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faXmark : faBars} 
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-yellow-500 bg-gray-50'
                  : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-purple-500 bg-gray-50'
                  : 'text-gray-700 hover:text-purple-500 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/brazil"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-green-500 bg-gray-50'
                  : 'text-gray-700 hover:text-green-500 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Brazil
          </NavLink>
          <NavLink
            to="/madrid"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-blue-500 bg-gray-50'
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Real Madrid
          </NavLink>
          <NavLink
            to="/more"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-gray-900 bg-gray-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            More
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Maracanã to Bernabéu is your premier source for news and updates about Brazil National Team and Real Madrid CF.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/brazil" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Brazil
                </NavLink>
              </li>
              <li>
                <NavLink to="/madrid" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Real Madrid
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maracanã to Bernabéu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brazil" element={<Brazil />} />
            <Route path="/madrid" element={<Madrid />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;