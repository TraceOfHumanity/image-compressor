import {useEffect, useState} from "react";
import {FaUpload} from "react-icons/fa";
import {Loader} from "./components/Loader";
import {CompressedImages} from "./components/CompressedImages";
import {ImageSettings} from "./components/ImageSettings";
import {DownloadAllImages} from "./components/DownloadAllImages";

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
  // const [quality, setQuality] = useState(90);

  const [files, setFiles] = useState<File[]>([]);
  const [compressedImages, setCompressedImages] = useState<CompressedFile[]>(
    []
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setIsLoading(true);
      setFiles((prev) => [...prev, ...files]);
    }
  };

  console.log(compressedImages);

  // const downloadAll = () => {
  //   compressedImages.forEach((image) => {
  //     const a = document.createElement("a");
  //     a.href = image.url;
  //     a.download = image.name;
  //     a.click();
  //   });
  // };

  useEffect(() => {
    setIsLoading(false);
  }, [compressedImages]);

  return (
    <div className="container h-screen max-h-screen px-4 py-8 md:px-8 md:py-16 flex flex-col gap-4 overflow-y-auto">
      <h1 className="text-2xl mb-4 md:mb-8 font-bold text-center font-eduBeginner">
        Image compressor
      </h1>

      <div className="border-2 w-full min-h-40 border-dashed border-mainText backdrop-blur-3xl rounded-md hover:bg-slate-950/5 duration-200 relative">
        <input
          className="w-full h-full opacity-0"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          multiple
        />
        <div className="text-mainText text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <p>Drag and drop or click to select images</p>
          <FaUpload className="text-2xl inline-block" />
        </div>
      </div>
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
