import {ImageCompressorContext} from '@/context/ImageCompressorContext';
import {ImageCompressorSettings} from '@/types/imageCompressorTypes';
import {useContext} from 'react';
import {FaUpload} from 'react-icons/fa';

export const FilesInput = () => {
  const {
    setIsLoading,
    setFiles,
    files: existingFiles,
  } = useContext(ImageCompressorContext) as ImageCompressorSettings;
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setIsLoading(true);
      setFiles([...existingFiles, ...Array.from(files)]);
    }
  };

  return (
    <div className='relative min-h-40 w-full rounded-md border-2 border-dashed border-mainText backdrop-blur-3xl duration-200 hover:bg-slate-950/5'>
      <input
        className='h-full w-full opacity-0'
        type='file'
        onChange={handleFileChange}
        accept='image/*'
        multiple
      />
      <div className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-mainText'>
        <p>Drag and drop or click to select images</p>
        <FaUpload className='inline-block text-2xl' />
      </div>
    </div>
  );
};
