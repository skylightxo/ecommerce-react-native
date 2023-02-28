import {IMAGE_URL} from '../constants/api';

export const ImageService = class {
  static async getImage(
    id: string,
    width: string = '100',
    height: string = '100',
  ) {
    const imageUrl = new URL(`${IMAGE_URL}/id/${id}/${width}/${height}`);
    const response = await fetch(imageUrl.toString());
    const data = response.url;
    return data;
  }
};
