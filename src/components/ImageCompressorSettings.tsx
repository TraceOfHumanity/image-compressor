import {useContext} from 'react';
import {ImageCompressorContext} from '@/context/ImageCompressorContext';
import {ImageCompressorSettings} from '@/types/imageCompressorTypes';

export const Settings = () => {
  const {
    maxImageWidth,
    maxImageHeight,
    minImageWidth,
    minImageHeight,
    setMaxImageWidth,
    setMaxImageHeight,
    setMinImageWidth,
    setMinImageHeight,
  } = useContext(ImageCompressorContext) as ImageCompressorSettings;

  const settingsItems = [
    {
      label: 'Max width',
      id: 'maxImageWidth',
      value: maxImageWidth,
      setValue: setMaxImageWidth,
      min: minImageWidth + 100,
      max: 2000,
    },
    {
      label: 'Max height',
      id: 'maxImageHeight',
      value: maxImageHeight,
      setValue: setMaxImageHeight,
      min: minImageHeight + 100,
      max: 2000,
    },
    {
      label: 'Min width',
      id: 'minImageWidth',
      value: minImageWidth,
      setValue: setMinImageWidth,
      min: 512,
      max: maxImageWidth - 200,
    },
    {
      label: 'Min height',
      id: 'minImageHeight',
      value: minImageHeight,
      setValue: setMinImageHeight,
      min: 512,
      max: maxImageHeight - 200,
    },
  ];
  return (
    <>
      <p className='font-bold'>Settings for the output file</p>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {settingsItems.map((item) => (
          <div className='flex flex-col gap-2' key={item.id}>
            <label htmlFor={item.id}>
              {item.label} {item.value} (px)
            </label>
            <input
              type='range'
              id={item.id}
              value={item.value}
              min={item.min}
              max={item.max}
              onChange={(e) => item.setValue(parseInt(e.target.value))}
            />
          </div>
        ))}
      </div>
    </>
  );
};
