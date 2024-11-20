import {useState} from "react";
import {FileInput} from "./components/fileInput";

function App() {
  const [file, setFile] = useState();
  // console.log(file);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };
  return (
    <div className="container h-screen max-h-screen px-4 py-8 md:px-8 md:py-16">
      <h1 className="text-2xl font-bold text-center">Image compressor</h1>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <FileInput file={file} />
    </div>
  );
}

export default App;
