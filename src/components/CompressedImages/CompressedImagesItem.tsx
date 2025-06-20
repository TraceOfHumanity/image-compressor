import {useContext, useEffect, useState} from 'react';
import Resizer from 'react-image-file-resizer';
import prettyBytes from 'pretty-bytes';
import {FaDownload} from 'react-icons/fa';
import {MdPhotoSizeSelectActual, MdPhotoSizeSelectLarge} from 'react-icons/md';
import {ImageCompressorContext} from '@/context/ImageCompressorContext';
import {ImageCompressorSettings} from '@/types/imageCompressorTypes';
import {CompressedFile} from '@/types/imageCompressorTypes';

export const CompressedImageItem = ({file}: {file: File}) => {
  const [newImage, setNewImage] = useState<CompressedFile>();
  const {
    setCompressedImages,
    maxImageWidth,
    maxImageHeight,
    minImageWidth,
    minImageHeight,
  } = useContext(ImageCompressorContext) as ImageCompressorSettings;

  const handleImage = (image: CompressedFile) => {
    setNewImage(image);
    setCompressedImages((prevImages: CompressedFile[]) => [
      ...prevImages,
      image,
    ]);
  };

  useEffect(() => {
    console.log(maxImageWidth, maxImageHeight, minImageWidth, minImageHeight);
    if (file) {
      console.log('File received', file);
      try {
        Resizer.imageFileResizer(
          file,
          maxImageWidth,
          maxImageHeight,
          file.type === 'image/jpeg' ? 'JPEG' : file.type,
          90,
          0,
          (blob) => {
            handleImage({
              url: URL.createObjectURL(blob as Blob),
              size: (blob as Blob).size,
              type: (blob as Blob).type,
              name: file.name,
            });
          },
          'blob',
          minImageWidth,
          minImageHeight,
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  if (!newImage) {
    return null;
  }
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = newImage.url;
    a.download = newImage.name;
    a.click();
  };

  return (
    <div className='group relative flex flex-col gap-2 rounded-md border border-black p-1 backdrop-blur'>
      <button
        className='absolute right-1 top-1 rounded-full bg-white p-2 opacity-0 group-hover:opacity-100'
        onClick={handleDownload}
      >
        <FaDownload />
      </button>
      <img src={newImage.url} alt='' style={{maxWidth: '100%'}} />
      <div className=''>
        <figure className='flex items-center gap-1'>
          <MdPhotoSizeSelectActual />{' '}
          {`original size: ${prettyBytes(file.size)}`}
        </figure>
        <figure className='flex items-center gap-1'>
          <MdPhotoSizeSelectLarge />
          {`compressed size: ${prettyBytes(newImage.size)}`}
        </figure>
      </div>
    </div>
  );
};
