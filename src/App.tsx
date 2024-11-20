import {useState} from "react";
import {CompressedImage} from "./components/CompressedImage";

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
    <div className="container h-screen max-h-screen px-4 py-8 md:px-8 md:py-16">
      <h1 className="text-2xl font-bold text-center">Image compressor</h1>

      <div className="border-2 w-full h-40 border-dashed border-mainText rounded-md bg-mainBg">
        <input
          className="w-full h-full opacity-0"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          multiple
        />
      </div>

      {compressedImages.length > 0 && (
        <button onClick={downloadAll}>Download all</button>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
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
