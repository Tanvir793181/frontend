import React, { useState } from 'react';
import { Users, Newspaper, BarChart, Calendar } from 'lucide-react';
import PlayerSection from '../components/team/PlayerSection';
import UpdatesSection from '../components/team/UpdatesSection';
import AnalysisSection from '../components/team/AnalysisSection';
import ScheduleSection from '../components/team/ScheduleSection';

const Brazil: React.FC = () => {
  const [activeSection, setActiveSection] = useState('players');

  const sections = [
    { id: 'players', icon: Users, label: 'Players' },
    { id: 'updates', icon: Newspaper, label: 'Updates' },
    { id: 'analysis', icon: BarChart, label: 'Analysis' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Brazil National Team
      </h1>

      {/* Section Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          {sections.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`flex items-center px-4 py-2 rounded-md ${
                activeSection === id
                  ? 'bg-green-500 text-white'
                  : 'text-gray-500 hover:text-green-500'
              } transition-colors duration-200`}
            >
              <Icon className="h-5 w-5 mr-2" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="mt-8">
        {activeSection === 'players' && (
          <PlayerSection team="brazil" />
        )}
        {activeSection === 'updates' && (
          <UpdatesSection team="brazil" />
        )}
        {activeSection === 'analysis' && (
          <AnalysisSection team="brazil" />
        )}
        {activeSection === 'schedule' && (
          <ScheduleSection team="brazil" />
        )}
      </div>
    </div>
  );
};

export default Brazil;