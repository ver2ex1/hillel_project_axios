import axios from 'config/axios';
import { toast } from 'react-toastify';

export const getSearchProducts = async (search, limit) => {
  try {
    const response = await axios.get('/search', {
      params: { q: search, limit },
    });
    return response.data.products;
  } catch (error) {
    toast.error('Failed to fetch products');
  }
};

export const createProduct = async (payload) => {
  try {
    const response = await axios.post('/add', payload);
    toast.success('Product was created');
    return response.data;
  } catch (error) {
    toast.error('Failed to create product');
  }
};
