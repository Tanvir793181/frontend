import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faHistory, faStar } from '@fortawesome/free-solid-svg-icons';
import NewsSection from '../components/NewsSection';
import api from '../services/api';

interface NewsItem {
  title: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await api.getLatestNews();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Maracanã to Bernabéu
            </h1>
            <p className="text-xl text-gray-200">
              Two Nations One Passion
            </p>
            <div className="mt-8">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200"
              >
                Learn More <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Main Box */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/12/15/15133463946962.jpg"
                  alt="Football"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Maracanã to Bernabéu</h2>
                  <p className="text-gray-200">Bridging two football powerhouses</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  A unique platform dedicated to bringing you comprehensive coverage of both the Brazilian National Team and Real Madrid CF. From match analysis to player profiles, we connect fans across continents through their shared passion for football excellence.
                </p>
              </div>
            </div>

            {/* Brazil Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src="https://www.shutterstock.com/shutterstock/videos/1094373863/thumb/9.jpg?ip=x480"
                  alt="Brazil"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Brazil National Team</h3>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faTrophy} className="w-4 h-4 text-yellow-500 mr-2" />
                    5 FIFA World Cup titles
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-500 mr-2" />
                    9 Copa América championships
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faHistory} className="w-4 h-4 text-yellow-500 mr-2" />
                    Rich football heritage
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Real Madrid Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden lg:col-span-1"
            >
              <div className="relative h-48">
                <img
                  src="https://cdn.shopify.com/s/files/1/0405/9807/7603/products/RM6BANG1_a6f188b0-e0c8-480c-bac4-c82ddffa8f12.png?v=1592821076"
                  alt="Real Madrid"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Real Madrid CF</h3>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faTrophy} className="w-4 h-4 text-blue-500 mr-2" />
                    14 UEFA Champions League titles
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-blue-500 mr-2" />
                    35 La Liga championships
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faHistory} className="w-4 h-4 text-blue-500 mr-2" />
                    Founded in 1902
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Stadiums Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Iconic Stadiums</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Maracanã */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src="https://w0.peakpx.com/wallpaper/713/607/HD-wallpaper-maracana-cityscapes-aerial-view-panorama-estadio-jornalista-mario-filho-soccer-football-stadium-fluminense-stadium-flamengo-stadium-brazil-brazilian-stadiums-rio-de-janeiro.jpg"
                    alt="Maracanã Stadium"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">Maracanã Stadium</h3>
                    <p className="text-gray-200">Rio de Janeiro, Brazil</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    The Maracanã, officially named Estádio Jornalista Mário Filho, is Brazil's largest stadium and one of football's most iconic venues. Opened in 1950 for the FIFA World Cup, it has hosted countless historic matches and remains a symbol of Brazilian football excellence.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>Capacity: 78,838</li>
                    <li>Opened: 1950</li>
                    <li>Notable Events: 1950 & 2014 World Cup Finals</li>
                  </ul>
                </div>
              </motion.div>

              {/* Santiago Bernabéu */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/5067014667001/bd8a8d59-496c-4770-b558-7ce971c350f1/d40cbe25-b7aa-4ed4-a784-4710789c18f7/1280x720/match/image.jpg"
                    alt="Santiago Bernabéu Stadium"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">Santiago Bernabéu Stadium</h3>
                    <p className="text-gray-200">Madrid, Spain</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Home to Real Madrid since 1947, the Santiago Bernabéu Stadium is one of football's most prestigious venues. Named after the club's legendary president, it has witnessed countless historic moments in football history and continues to be a symbol of footballing excellence.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>Capacity: 81,044</li>
                    <li>Opened: 1947</li>
                    <li>Notable Events: 1982 World Cup Final, 4 European Cup Finals</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-white">
        <NewsSection news={news} />
      </section>
    </>
  );
};

export default Home;