import {useState} from "react";
import {CompressedImage} from "./components/CompressedImage";
import {FaDownload} from "react-icons/fa";

function App() {
  const [files, setFiles] = useState<File[]>([]);
  const [compressedImages, setCompressedImages] = useState<
    {url: string; size: number; type: string; name: string}[]
  >([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
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

  return (
    <div className="container h-screen max-h-screen px-4 py-8 md:px-8 md:py-16 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Image compressor</h1>

      <div className="my-auto border-2 w-full min-h-40 border-dashed border-mainText rounded-md bg-mainBg relative">
        <input
          className="w-full h-full opacity-0"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          multiple
        />
        <p className="text-mainText text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Drag and drop or click to select images
        </p>
      </div>

      {compressedImages.length > 0 && (
        <button
          className="flex items-center gap-2 w-fit ml-auto"
          onClick={downloadAll}
        >
          Download all <FaDownload />
        </button>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 pb-5 md:pb-16" >
        {files.map((file) => (
          <CompressedImage
            key={file.name}
            file={file}
            setCompressedImages={setCompressedImages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
