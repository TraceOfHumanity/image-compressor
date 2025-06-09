import {CompressedImageItem} from "./CompressedImagesItem";

export type CompressedImagesProps = {
  files: File[];
  setCompressedImages: React.Dispatch<
    React.SetStateAction<
      {url: string; size: number; type: string; name: string}[]
    >
  >;
  maxImageWidth: number;
  maxImageHeight: number;
  minImageWidth: number;
  minImageHeight: number;
  quality?: number;
};

export const CompressedImages = ({
  files,
  setCompressedImages,
  maxImageWidth,
  maxImageHeight,
  minImageWidth,
  minImageHeight,
}: CompressedImagesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 pb-5 md:pb-16">
      {files.map((file) => (
        <CompressedImageItem
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
  );
};
