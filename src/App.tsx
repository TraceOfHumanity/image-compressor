import {useEffect, useState} from "react";
import {CompressedImage} from "./components/CompressedImage";
import {FaDownload, FaUpload} from "react-icons/fa";

function App() {
  const [maxImageWidth, setMaxImageWidth] = useState(1500);
  const [maxImageHeight, setMaxImageHeight] = useState(1500);
  const [minImageWidth, setMinImageWidth] = useState(512);
  const [minImageHeight, setMinImageHeight] = useState(512);
  // const [quality] = useState(90);
  const [isLoading, setIsLoading] = useState(false);

  const [files, setFiles] = useState<File[]>([]);
  const [compressedImages, setCompressedImages] = useState<
    {url: string; size: number; type: string; name: string}[]
  >([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setIsLoading(true);
      setFiles((prev) => [...prev, ...files]);
    }
  };

  console.log(compressedImages);

  const downloadAll = () => {
    compressedImages.forEach((image) => {
      const a = document.createElement("a");
      a.href = image.url;
      a.download = image.name;
      a.click();
    });
  };

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
      {/* {!files.length && ( */}
      {/* // <> */}
      <p className="font-bold">Settings for the output file</p>
      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-4">
        {/* <div className="col-span-full">
              <label htmlFor="quality">Quality {quality}%</label>
              <input
                type="range"
                id="quality"
                value={quality}
                onChange={(e) => setQuality(parseInt(e.target.value))}
              />
            </div> */}
        <div className="">
          <label htmlFor="maxImageWidth">Max width {maxImageWidth} (px)</label>
          <input
            type="range"
            id="maxImageWidth"
            value={maxImageWidth}
            min={minImageWidth + 100}
            max={2000}
            onChange={(e) => setMaxImageWidth(parseInt(e.target.value))}
          />
        </div>
        <div className="">
          <label htmlFor="maxImageHeight">
            Max height {maxImageHeight} (px)
          </label>
          <input
            type="range"
            id="maxImageHeight"
            value={maxImageHeight}
            min={minImageHeight + 100}
            max={2000}
            onChange={(e) => setMaxImageHeight(parseInt(e.target.value))}
          />
        </div>
        <div className="">
          <label htmlFor="minImageWidth">Min width {minImageWidth} (px)</label>
          <input
            type="range"
            id="minImageWidth"
            value={minImageWidth}
            min={100}
            max={maxImageWidth - 200}
            onChange={(e) => setMinImageWidth(parseInt(e.target.value))}
          />
        </div>
        <div className="">
          <label htmlFor="minImageHeight">
            Min height {minImageHeight} (px)
          </label>
          <input
            type="range"
            id="minImageHeight"
            value={minImageHeight}
            min={100}
            max={maxImageHeight - 200}
            onChange={(e) => setMinImageHeight(parseInt(e.target.value))}
          />
        </div>
      </div>
      {/* </> */}
      {/* // )} */}

      {compressedImages.length > 0 && (
        <button
          className="flex items-center gap-2 w-fit ml-auto"
          onClick={downloadAll}
        >
          Download all <FaDownload />
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 pb-5 md:pb-16">
        {files.map((file) => (
          <CompressedImage
            key={file.name}
            file={file}
            setCompressedImages={setCompressedImages}
            maxImageWidth={maxImageWidth}
            maxImageHeight={maxImageHeight}
            minImageWidth={minImageWidth}
            minImageHeight={minImageHeight}
            // quality={quality}
          />
        ))}
      </div>
      {isLoading && (
        <div className="flex items-center justify-center">
          <img src="/loader.svg" alt="loading" className="w-16" />
        </div>
      )}
    </div>
  );
}

export default App;
