import React from 'react';
import { Calendar } from 'lucide-react';

const matches = [
  {
    id: 1,
    team: 'Brazil',
    opponent: 'Argentina',
    competition: 'World Cup Qualifier',
    date: '2024-03-20',
    time: '20:00',
    venue: 'Maracanã Stadium',
    location: 'Rio de Janeiro, Brazil',
  },
  {
    id: 2,
    team: 'Real Madrid',
    opponent: 'Barcelona',
    competition: 'La Liga',
    date: '2024-03-23',
    time: '21:00',
    venue: 'Santiago Bernabéu',
    location: 'Madrid, Spain',
  },
  {
    id: 3,
    team: 'Real Madrid',
    opponent: 'Manchester City',
    competition: 'Champions League',
    date: '2024-03-27',
    time: '20:45',
    venue: 'Santiago Bernabéu',
    location: 'Madrid, Spain',
  },
  {
    id: 4,
    team: 'Brazil',
    opponent: 'Uruguay',
    competition: 'World Cup Qualifier',
    date: '2024-03-30',
    time: '20:00',
    venue: 'Centenário Stadium',
    location: 'Montevideo, Uruguay',
  },
];

const MatchSchedule: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
          <Calendar className="h-8 w-8 text-purple-500 mr-2" />
          Upcoming Matches
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay up to date with all upcoming matches for both Brazil National Team and Real Madrid CF.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Match
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {matches.map((match) => (
                <tr
                  key={match.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        match.team === 'Brazil'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {match.team}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {match.team} vs {match.opponent}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{match.competition}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(match.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="text-sm text-gray-500">{match.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{match.venue}</div>
                    <div className="text-sm text-gray-500">{match.location}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatchSchedule;