import { CompressedFile } from "@/types/imageCompressorTypes";
import { useEffect, useState } from "react";
import type { ImageCompressorSettings } from "@/types/imageCompressorTypes";

export const useImageCompressor = (): ImageCompressorSettings => {
  const [isLoading, setIsLoading] = useState(false);
  const [maxImageWidth, setMaxImageWidth] = useState(1000);
  const [maxImageHeight, setMaxImageHeight] = useState(1000);
  const [minImageWidth, setMinImageWidth] = useState(900);
  const [minImageHeight, setMinImageHeight] = useState(900);

  const [files, setFiles] = useState<File[]>([]);

  const [compressedImages, setCompressedImages] = useState<CompressedFile[]>(
    []
  );

  useEffect(() => {
    console.log(maxImageWidth, maxImageHeight, minImageWidth, minImageHeight);
  }, [maxImageWidth, maxImageHeight, minImageWidth, minImageHeight]);

  return {
    isLoading,
    setIsLoading,
    maxImageWidth,
    setMaxImageWidth,
    maxImageHeight,
    setMaxImageHeight,
    minImageWidth,
    setMinImageWidth,
    minImageHeight,
    setMinImageHeight,
    files,
    setFiles,
    compressedImages,
    setCompressedImages,
  }
}
