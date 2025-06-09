import {useEffect, useState} from "react";
import {Loader} from "./components/Loader";
import {ImageCompressor} from "./components/ImageCompressor";
import { CompressedFile } from "./types/imageCompressorTypes";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [maxImageWidth, setMaxImageWidth] = useState(1500);
  const [maxImageHeight, setMaxImageHeight] = useState(1500);
  const [minImageWidth, setMinImageWidth] = useState(512);
  const [minImageHeight, setMinImageHeight] = useState(512);
  
  const [files, setFiles] = useState<File[]>([]);
  const [compressedImages, setCompressedImages] = useState<CompressedFile[]>(
    []
  );

  useEffect(() => {
    setIsLoading(false);
  }, [compressedImages]);

  return (
    <ImageCompressor>
      <ImageCompressor.Title />
      <ImageCompressor.FilesInput
        prevFiles={files}
        setIsLoading={setIsLoading}
        setFiles={setFiles}
      />
      <ImageCompressor.Settings
        maxImageWidth={maxImageWidth}
        maxImageHeight={maxImageHeight}
        minImageWidth={minImageWidth}
        minImageHeight={minImageHeight}
        setMaxImageWidth={setMaxImageWidth}
        setMaxImageHeight={setMaxImageHeight}
        setMinImageWidth={setMinImageWidth}
        setMinImageHeight={setMinImageHeight}
      />
      <ImageCompressor.Actions compressedImages={compressedImages} />
      <ImageCompressor.CompressedImages
        files={files}
        setCompressedImages={setCompressedImages}
        maxImageWidth={maxImageWidth}
        maxImageHeight={maxImageHeight}
        minImageWidth={minImageWidth}
        minImageHeight={minImageHeight}
      />
      {isLoading && <Loader />}
    </ImageCompressor>
  );
}

export default App;
