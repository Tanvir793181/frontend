import React from 'react';
import { Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
          <Trophy className="h-8 w-8 text-yellow-500 mr-2" />
          About Maracanã to Bernabéu
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your premier destination for everything related to the Brazil National Team and Real Madrid CF.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We strive to provide the most comprehensive and up-to-date coverage of both the Brazil National Team and Real Madrid CF. Our platform brings together fans from across the globe, united by their passion for football excellence.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <ul className="space-y-4 text-gray-600">
            <li>• Latest news and updates</li>
            <li>• In-depth match analysis</li>
            <li>• Player profiles and statistics</li>
            <li>• Upcoming match schedules</li>
            <li>• Team updates and transfer news</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg">
          Stay connected with fellow fans and never miss an update about your favorite teams. Follow us on social media and be part of our growing community.
        </p>
      </div>
    </div>
  );
};

export default About;