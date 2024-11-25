import {useEffect, useState} from "react";
import {Loader} from "./components/Loader";
import {CompressedImages} from "./components/CompressedImages";
import {ImageSettings} from "./components/ImageSettings";
import {DownloadAllImages} from "./components/DownloadAllImages";
import {InputFiles} from "./components/InputFiles";

export type CompressedFile = {
  url: string;
  size: number;
  type: string;
  name: string;
};

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
    <div className="container h-screen max-h-screen px-4 py-8 md:px-8 md:py-16 flex flex-col gap-4 overflow-y-auto">
      <h1 className="text-2xl mb-4 md:mb-8 font-bold text-center font-eduBeginner">
        Image compressor
      </h1>
      <InputFiles
        prevFiles={files}
        setIsLoading={setIsLoading}
        setFiles={setFiles}
      />
      <ImageSettings
        maxImageWidth={maxImageWidth}
        maxImageHeight={maxImageHeight}
        minImageWidth={minImageWidth}
        minImageHeight={minImageHeight}
        setMaxImageWidth={setMaxImageWidth}
        setMaxImageHeight={setMaxImageHeight}
        setMinImageWidth={setMinImageWidth}
        setMinImageHeight={setMinImageHeight}
      />
      <DownloadAllImages compressedImages={compressedImages} />
      <CompressedImages
        files={files}
        setCompressedImages={setCompressedImages}
        maxImageWidth={maxImageWidth}
        maxImageHeight={maxImageHeight}
        minImageWidth={minImageWidth}
        minImageHeight={minImageHeight}
      />
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
