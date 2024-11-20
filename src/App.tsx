import {useState} from "react";
import {FileInput} from "./components/fileInput";

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
      <input type="file" onChange={handleFileChange} accept="image/*" multiple />
      {files.map((file) => (
        <FileInput file={file} />
      ))}
    </div>
  );
}

export default App;
