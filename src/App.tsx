import {FileInput} from "./components/fileInput";

function App() {
  return (
    <div className="container h-screen max-h-screen px-4 py-8 md:px-8 md:py-16">
      <h1 className="text-2xl font-bold text-center">Image compressor</h1>
      <FileInput />
    </div>
  );
}

export default App;
