import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../../services/api';

interface Player {
  name: string;
  club: string;
  age: number;
  position: string;
  image: string;
}

interface PlayerSectionProps {
  team: 'brazil' | 'madrid';
}

const PlayerSection: React.FC<PlayerSectionProps> = ({ team }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = team === 'brazil' 
          ? await api.getBrazilPlayers()
          : await api.getMadridPlayers();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [team]);

  const groupedPlayers = players.reduce((acc, player) => {
    const position = player.position;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(player);
    return acc;
  }, {} as Record<string, Player[]>);

  if (loading) {
    return <div className="text-center py-8">Loading players...</div>;
  }

  return (
    <div>
      {Object.entries(groupedPlayers).map(([position, positionPlayers]) => (
        <div key={position} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{position}s</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {positionPlayers.map((player, index) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative h-48">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {player.name}
                  </h3>
                  <p className="text-sm text-gray-600">{player.position}</p>
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>{player.club}</span>
                    <span>{player.age} years</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerSection;