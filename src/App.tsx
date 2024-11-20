import {useState} from "react";
import {CompressedImage} from "./components/CompressedImage";

function App() {
  const [files, setFiles] = useState<File[]>([]);
  // console.log(file);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFiles((prev) => [...prev, ...files]);
    }
  };
  return (
    <div className="container h-screen max-h-screen px-4 py-8 md:px-8 md:py-16">
      <h1 className="text-2xl font-bold text-center">Image compressor</h1>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        multiple
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {files.map((file) => (
          <CompressedImage file={file} />
        ))}
      </div>
    </div>
  );
}

export default App;
