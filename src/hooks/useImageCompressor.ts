import { CompressedFile } from "@/types/imageCompressorTypes";
import { useState } from "react";
import type { ImageCompressorSettings } from "@/types/imageCompressorTypes";

export const useImageCompressor = (): ImageCompressorSettings => {
  const [isLoading, setIsLoading] = useState(false);
  const [maxImageWidth, setMaxImageWidth] = useState(1500);
  const [maxImageHeight, setMaxImageHeight] = useState(1500);
  const [minImageWidth, setMinImageWidth] = useState(512);
  const [minImageHeight, setMinImageHeight] = useState(512);

  const [files, setFiles] = useState<File[]>([]);

  const [compressedImages, setCompressedImages] = useState<CompressedFile[]>(
    []
  );

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
