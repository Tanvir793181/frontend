import axios from 'axios';

const BASE_URL = 'https://maracana2bernabue.onrender.com/api';

const api = {
  getLatestNews: async () => {
    const response = await axios.get(`${BASE_URL}/news`);
    return response.data.map((item: any) => ({
      ...item,
      image: `https://maracana2bernabue.onrender.com/${item.image}`
    }));
  },

  getBrazilUpdates: async () => {
    const response = await axios.get(`${BASE_URL}/brazil/updates`);
    return response.data.map((item: any) => ({
      ...item,
      photos: item.photos.map((photo: string) => `https://maracana2bernabue.onrender.com/${photo}`)
    }));
  },

  getBrazilPlayers: async () => {
    const response = await axios.get(`${BASE_URL}/brazil/players`);
    return response.data.map((item: any) => ({
      ...item,
      image: `https://maracana2bernabue.onrender.com/${item.image}`
    }));
  },

  getBrazilAnalysis: async () => {
    const response = await axios.get(`${BASE_URL}/brazil/analysis`);
    return response.data.map((item: any) => ({
      ...item,
      photos: item.photos.map((photo: string) => `https://maracana2bernabue.onrender.com/${photo}`)
    }));
  },

  getBrazilMatches: async () => {
    const response = await axios.get(`${BASE_URL}/brazil/matches`);
    return response.data;
  },

  getMadridUpdates: async () => {
    const response = await axios.get(`${BASE_URL}/madrid/updates`);
    return response.data.map((item: any) => ({
      ...item,
      photos: item.photos.map((photo: string) => `https://maracana2bernabue.onrender.com/${photo}`)
    }));
  },

  getMadridPlayers: async () => {
    const response = await axios.get(`${BASE_URL}/madrid/players`);
    return response.data.map((item: any) => ({
      ...item,
      image: `https://maracana2bernabue.onrender.com/${item.image}`
    }));
  },

  getMadridAnalysis: async () => {
    const response = await axios.get(`${BASE_URL}/madrid/analysis`);
    return response.data.map((item: any) => ({
      ...item,
      photos: item.photos.map((photo: string) => `https://maracana2bernabue.onrender.com/${photo}`)
    }));
  },

  getMadridMatches: async () => {
    const response = await axios.get(`${BASE_URL}/madrid/matches`);
    return response.data;
  },
};

export default api;