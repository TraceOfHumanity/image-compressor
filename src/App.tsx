import {Loader} from "./components/Loader";
import {ImageCompressor} from "./components/ImageCompressor";

function App() {
  return (
    <ImageCompressor>
      <ImageCompressor.Title />
      <ImageCompressor.FilesInput />
      <ImageCompressor.Settings
        maxImageWidth={maxImageWidth}
        maxImageHeight={maxImageHeight}
        minImageWidth={minImageWidth}
        minImageHeight={minImageHeight}
        setMaxImageWidth={setMaxImageWidth}
        setMaxImageHeight={setMaxImageHeight}
        setMinImageWidth={setMinImageWidth}
        setMinImageHeight={setMinImageHeight}
      />
      <ImageCompressor.Actions compressedImages={compressedImages} />
      <ImageCompressor.CompressedImages
        files={files}
        setCompressedImages={setCompressedImages}
        maxImageWidth={maxImageWidth}
        maxImageHeight={maxImageHeight}
        minImageWidth={minImageWidth}
        minImageHeight={minImageHeight}
      />
      {isLoading && <Loader />}
    </ImageCompressor>
  );
}

export default App;
