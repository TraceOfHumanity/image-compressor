import {createContext} from 'react';
import {ImageCompressorSettings} from '@/types/imageCompressorTypes';

export const ImageCompressorContext =
  createContext<ImageCompressorSettings | null>(null);
