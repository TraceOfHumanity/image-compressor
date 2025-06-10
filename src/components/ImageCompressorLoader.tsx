import {ImageCompressorContext} from '@/context/ImageCompressorContext';
import {ImageCompressorSettings} from '@/types/imageCompressorTypes';
import {useContext, useEffect} from 'react';

export const Loader = () => {
  const {isLoading, compressedImages, setIsLoading} = useContext(
    ImageCompressorContext,
  ) as ImageCompressorSettings;

  useEffect(() => {
    if (compressedImages.length > 0) {
      setIsLoading(false);
    }
  }, [compressedImages, setIsLoading]);

  if (!isLoading) return null;
  return (
    <div className='flex items-center justify-center'>
      <img src='/loader.svg' alt='loading' className='w-16' />
    </div>
  );
};
