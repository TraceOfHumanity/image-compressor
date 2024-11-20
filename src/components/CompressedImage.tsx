import {useEffect, useState} from "react";
import Resizer from "react-image-file-resizer";
import prettyBytes from "pretty-bytes";
import {FaDownload} from "react-icons/fa";

export const CompressedImage = ({
  file,
  setCompressedImages,
}: {
  file: File;
  setCompressedImages: React.Dispatch<
    React.SetStateAction<
      {url: string; size: number; type: string; name: string}[]
    >
  >;
}) => {
  const [newImage, setNewImage] = useState<{
    url: string;
    size: number;
    type: string;
    name: string;
  }>();

  const handleImage = (image: {
    url: string;
    size: number;
    type: string;
    name: string;
  }) => {
    setNewImage(image);
    setCompressedImages((prev) => [...prev, image]);
  };

  useEffect(() => {
    if (file) {
      console.log("File received", file);
      try {
        Resizer.imageFileResizer(
          file,
          1500,
          1500,
          "JPEG",
          90,
          0,
          (blob) => {
            handleImage({
              url: URL.createObjectURL(blob),
              size: blob.size,
              type: blob.type,
              name: file.name,
            });
          },
          "blob",
          400,
          400
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, [file]);

  if (!newImage) {
    return null;
  }
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = newImage.url;
    a.download = newImage.name;
    a.click();
  };

  return (
    <div className="flex flex-col gap-2 relative group">
      <button
        className="absolute top-1 right-1 rounded-full bg-white p-2 opacity-0 group-hover:opacity-100"
        onClick={handleDownload}
      >
        <FaDownload />
      </button>
      <img src={newImage.url} alt="" style={{maxWidth: "100%"}} />
      <div className="">
        <figure>{`original size: ${prettyBytes(file.size)}`}</figure>
        <figure>{`compressed size: ${prettyBytes(newImage.size)}`}</figure>
      </div>
    </div>
  );
};