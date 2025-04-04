import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import api from '../../services/api';

interface Update {
  title: string;
  description: string;
  photos: string[];
}

interface UpdatesSectionProps {
  team: 'brazil' | 'madrid';
}

const UpdatesSection: React.FC<UpdatesSectionProps> = ({ team }) => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [selectedUpdate, setSelectedUpdate] = useState<Update | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const data = team === 'brazil'
          ? await api.getBrazilUpdates()
          : await api.getMadridUpdates();
        setUpdates(data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, [team]);

  if (loading) {
    return <div className="text-center py-8">Loading updates...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {updates.map((update, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
            onClick={() => setSelectedUpdate(update)}
          >
            <div className="relative h-48">
              <img
                src={update.photos[0]}
                alt={update.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {update.title}
              </h3>
              <p className="text-gray-600 line-clamp-3">
                {update.description}
              </p>
              <button 
                className={`mt-4 text-${team === 'brazil' ? 'green' : 'blue'}-500 hover:text-${team === 'brazil' ? 'green' : 'blue'}-600 font-medium`}
              >
                Read More
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Update Modal */}
      <AnimatePresence>
        {selectedUpdate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelectedUpdate(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative h-96">
                <img
                  src={selectedUpdate.photos[0]}
                  alt={selectedUpdate.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedUpdate.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {selectedUpdate.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {selectedUpdate.photos.slice(1).map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Additional photo ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
                <button
                  onClick={() => setSelectedUpdate(null)}
                  className={`focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}
                
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UpdatesSection;