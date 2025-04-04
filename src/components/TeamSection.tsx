import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TeamSectionProps {
  team: 'brazil' | 'real-madrid';
  title: string;
  accentColor: string;
  icon: LucideIcon;
}

const TeamSection: React.FC<TeamSectionProps> = ({ team, title, accentColor, icon: Icon }) => {
  const updates = [
    {
      id: 1,
      title: team === 'brazil' 
        ? "National Team Training Camp Begins" 
        : "Champions League Preparations Underway",
      date: "March 15, 2024",
      image: team === 'brazil'
        ? "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        : "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: team === 'brazil'
        ? "New Talent Rising Through the Ranks"
        : "Key Player Returns from Injury",
      date: "March 12, 2024",
      image: team === 'brazil'
        ? "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        : "https://images.unsplash.com/photo-1577223625816-6500cc0ab721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className={`text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center`}>
          <Icon className={`h-8 w-8 text-${accentColor}-500 mr-2`} />
          {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Latest updates, match analysis, and player information for {title}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {updates.map((update) => (
          <div
            key={update.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="relative h-64">
              <img
                src={update.image}
                alt={update.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {update.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {update.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${accentColor}-500 hover:bg-${accentColor}-600 transition-colors duration-200`}
        >
          View All Updates
        </button>
      </div>
    </div>
  );
};

export default TeamSection;