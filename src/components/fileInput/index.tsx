import React, {useEffect, useState} from "react";
import Resizer from "react-image-file-resizer";
import prettyBytes from "pretty-bytes";

export const FileInput = ({file}: {file: File}) => {
  const [newImage, setNewImage] = useState();
  
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
    <>
      <figure>{`${prettyBytes(newImage.size)} ${newImage.type}`}</figure>
      <img src={newImage.url} alt="" style={{maxWidth: "100%"}} />
    </>
  );
};
