import {API_URL} from '../constants/api';

export const ProductsService = class {
  static async getProducts() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  }
};
