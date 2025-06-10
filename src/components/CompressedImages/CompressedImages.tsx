import {CompressedImageItem} from './CompressedImagesItem';
import {useContext} from 'react';
import {ImageCompressorContext} from '@/context/ImageCompressorContext';
import {ImageCompressorSettings} from '@/types/imageCompressorTypes';

export const CompressedImages = () => {
  const {files} = useContext(ImageCompressorContext) as ImageCompressorSettings;

  return (
    <div className='grid grid-cols-1 gap-4 pb-5 md:grid-cols-2 md:pb-16 lg:grid-cols-3'>
      {files.map((file) => (
        <CompressedImageItem key={file.name} file={file} />
      ))}
    </div>
  );
};
