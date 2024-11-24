import {FaDownload} from "react-icons/fa";
import {CompressedFile} from "../App";

export const DownloadAllImages = ({
  compressedImages,
}: {
  compressedImages: CompressedFile[];
}) => {
  const downloadAll = () => {
    compressedImages.forEach((image) => {
      const a = document.createElement("a");
      a.href = image.url;
      a.download = image.name;
      a.click();
    });
  };

  if (compressedImages.length === 0) return null;
  return (
    <button
      className="flex items-center gap-2 w-fit ml-auto"
      onClick={downloadAll}
    >
      Download all <FaDownload />
    </button>
  );
};
