import {ImageCompressor} from './components/ImageCompressor';

function App() {
  return (
    <ImageCompressor>
      <ImageCompressor.Title />
      <ImageCompressor.FilesInput />
      <ImageCompressor.Settings />
      <ImageCompressor.Actions />
      <ImageCompressor.CompressedImages />
      <ImageCompressor.Loader />
    </ImageCompressor>
  );
}

export default App;
