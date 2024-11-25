import {useEffect, useState} from "react";
import Resizer from "react-image-file-resizer";
import prettyBytes from "pretty-bytes";
import {FaDownload} from "react-icons/fa";
import {MdPhotoSizeSelectActual, MdPhotoSizeSelectLarge} from "react-icons/md";
import {CompressedImagesProps} from "./index";

type CompressedImageItemProps = Omit<CompressedImagesProps, "files"> & {
  file: File;
};

type CompressedFile = {
  url: string;
  size: number;
  type: string;
  name: string;
};

export const CompressedImageItem = ({
  file,
  setCompressedImages,
  maxImageWidth = 2000,
  maxImageHeight = 2000,
  minImageWidth = 400,
  minImageHeight = 400,
  quality = 90,
}: CompressedImageItemProps) => {
  const [newImage, setNewImage] = useState<CompressedFile>();

  const handleImage = (image: CompressedFile) => {
    setNewImage(image);
    setCompressedImages((prev) => [...prev, image]);
  };

  useEffect(() => {
    if (file) {
      console.log("File received", file);
      try {
        Resizer.imageFileResizer(
          file,
          maxImageWidth,
          maxImageHeight,
          file.type === "image/jpeg" ? "JPEG" : file.type,
          // "JPEG",
          quality,
          0,
          (blob) => {
            handleImage({
              url: URL.createObjectURL(blob as Blob),
              size: (blob as Blob).size,
              type: (blob as Blob).type,
              name: file.name,
            });
          },
          "blob",
          minImageWidth,
          minImageHeight
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
    <div className="flex flex-col gap-2 relative group border border-black rounded-md p-1 backdrop-blur">
      <button
        className="absolute top-1 right-1 rounded-full bg-white p-2 opacity-0 group-hover:opacity-100"
        onClick={handleDownload}
      >
        <FaDownload />
      </button>
      <img src={newImage.url} alt="" style={{maxWidth: "100%"}} />
      <div className="">
        <figure className="flex items-center gap-1">
          <MdPhotoSizeSelectActual />{" "}
          {`original size: ${prettyBytes(file.size)}`}
        </figure>
        <figure className="flex items-center gap-1">
          <MdPhotoSizeSelectLarge />
          {`compressed size: ${prettyBytes(newImage.size)}`}
        </figure>
      </div>
    </div>
  );
};
