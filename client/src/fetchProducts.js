import axios from 'axios';

const API_URL = 'https://4e59-2804-c2c-cf05-5666-e9bf-3c0d-ec92-485f.ngrok-free.app/product';

async function fetchProducts() {
    try {
      const response = await axios.get(API_URL);
      const products = response.data;
      return products;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return []; // Retorna um array vazio em caso de erro
    }
  }
  