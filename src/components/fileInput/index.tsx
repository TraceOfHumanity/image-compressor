import {useEffect, useState} from "react";
import Resizer from "react-image-file-resizer";
import prettyBytes from "pretty-bytes";

export const FileInput = ({file}: {file: File}) => {
  const [newImage, setNewImage] = useState<{
    url: string;
    size: number;
    type: string;
  }>();

  const handleImage = (image: {url: string; size: number; type: string}) => {
    setNewImage(image);
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

  return (
    <div className="flex flex-col gap-2">
      <img src={newImage.url} alt="" style={{maxWidth: "100%"}} />
      <div className="">
        <figure>{`original size: ${prettyBytes(file.size)}`}</figure>
        <figure>{`compressed size: ${prettyBytes(newImage.size)}`}</figure>
      </div>
    </div>
  );
};
