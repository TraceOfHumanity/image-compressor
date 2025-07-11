import {useImageCompressor} from '@/hooks/useImageCompressor';
import {CompressedImages} from './CompressedImages/CompressedImages';
import {Actions} from './ImageCompressorActions';
import {FilesInput} from './ImageCompressorFilesInput';
import {Settings} from './ImageCompressorSettings';
import {Title} from './ImageCompressorTitle';
import {ImageCompressorContext} from '@/context/ImageCompressorContext';
import {Loader} from './ImageCompressorLoader';

export const ImageCompressor = ({children}: {children: React.ReactNode}) => {
  const contextValue = useImageCompressor();
  return (
    <ImageCompressorContext.Provider value={contextValue}>
      <div className='container flex h-screen max-h-screen flex-col gap-4 overflow-y-auto px-4 py-8 md:px-8 md:py-16'>
        {children}
      </div>
    </ImageCompressorContext.Provider>
  );
};

ImageCompressor.Title = Title;
ImageCompressor.FilesInput = FilesInput;
ImageCompressor.Settings = Settings;
ImageCompressor.Actions = Actions;
ImageCompressor.CompressedImages = CompressedImages;
ImageCompressor.Loader = Loader;
