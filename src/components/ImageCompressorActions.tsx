import {FaDownload} from "react-icons/fa";
import { useContext } from "react";
import { ImageCompressorContext } from "@/context/ImageCompressorContext";
import { ImageCompressorSettings } from "@/types/imageCompressorTypes";
import JSZip from "jszip";

export const Actions = () => {
  const { compressedImages } = useContext(ImageCompressorContext) as ImageCompressorSettings;
  
  const downloadAll = async () => {
    const zip = new JSZip();
    
    // Додаємо всі зображення до архіву
    for (const image of compressedImages) {
      try {
        const response = await fetch(image.url);
        const blob = await response.blob();
        zip.file(image.name, blob);
      } catch (error) {
        console.error(`Помилка при додаванні файлу ${image.name}:`, error);
      }
    }
    
    // Створюємо та завантажуємо архів
    try {
      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "compressed-images.zip";
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Помилка при створенні архіву:", error);
    }
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
