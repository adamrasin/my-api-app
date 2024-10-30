import axios from 'axios';
import { FactResponse } from '../types';

export const fetchRandomFact = async (): Promise<FactResponse> => {
  const response = await axios.get<FactResponse>('https://uselessfacts.jsph.pl/random.json?language=en');
  return response.data;
};