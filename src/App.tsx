import {useEffect, useState} from "react";
import {Loader} from "./components/Loader";
import {CompressedImages} from "./components/CompressedImages";
import {ImageSettings} from "./components/ImageSettings";
import {DownloadAllImages} from "./components/DownloadAllImages";
import {InputFiles} from "./components/InputFiles";
import {Title} from "./components/Title";
import {MainContainer} from "./components/MainContainer";

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
    <MainContainer>
      <Title />
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
    </MainContainer>
  );
}

export default App;
