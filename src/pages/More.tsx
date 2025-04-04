import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const More: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Area</h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <FontAwesomeIcon icon={faLock} className="text-4xl text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Admin Access</h2>
          <p className="text-gray-600 mb-6">
            This area is restricted to administrators only.
          </p>
          <a
            href="https://mar2ber.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Admin Login
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default More;