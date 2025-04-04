import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import api from '../../services/api';

interface Analysis {
  title: string;
  description: string;
  photos: string[];
}

interface AnalysisSectionProps {
  team: 'brazil' | 'madrid';
}

const AnalysisSection: React.FC<AnalysisSectionProps> = ({ team }) => {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [selectedAnalysis, setSelectedAnalysis] = useState<Analysis | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalyses = async () => {
      try {
        const data = team === 'brazil'
          ? await api.getBrazilAnalysis()
          : await api.getMadridAnalysis();
        setAnalyses(data);
      } catch (error) {
        console.error('Error fetching analyses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyses();
  }, [team]);

  const handleAnalysisClick = (analysis: Analysis) => {
    setSelectedAnalysis(analysis);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAnalysis) {
      setCurrentImageIndex((prev) => 
        prev === selectedAnalysis.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAnalysis) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAnalysis.photos.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading analyses...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analyses.map((analysis, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-200"
            onClick={() => handleAnalysisClick(analysis)}
          >
            <div className="relative h-48">
              <img
                src={analysis.photos[0]}
                alt={analysis.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {analysis.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for expanded view */}
      <AnimatePresence>
        {selectedAnalysis && (
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
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedAnalysis.title}
                  </h2>
                  <button
                    onClick={() => setSelectedAnalysis(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="relative h-96 mb-4">
                  <img
                    src={selectedAnalysis.photos[currentImageIndex]}
                    alt={`Analysis image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {selectedAnalysis.photos.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </div>
                <p className="text-gray-600 mb-4 whitespace-pre-line">
                  {selectedAnalysis.description}
                </p>
                <button
                  onClick={() => setSelectedAnalysis(null)}
                  className={`px-4 py-2 bg-${team === 'brazil' ? 'green' : 'blue'}-500 text-white rounded-md hover:bg-${team === 'brazil' ? 'green' : 'blue'}-600 transition-colors duration-200`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnalysisSection;