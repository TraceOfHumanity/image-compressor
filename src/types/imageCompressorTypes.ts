export type CompressedFile = {
  url: string;
  size: number;
  type: string;
  name: string;
};

export type ImageCompressorSettings = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  maxImageWidth: number;
  setMaxImageWidth: (maxImageWidth: number) => void;
  maxImageHeight: number;
  setMaxImageHeight: (maxImageHeight: number) => void;
  minImageWidth: number;
  setMinImageWidth: (minImageWidth: number) => void;
  minImageHeight: number;
  setMinImageHeight: (minImageHeight: number) => void;
  files: File[];
  setFiles: (files: File[]) => void;
  compressedImages: CompressedFile[];
  setCompressedImages: (
    compressedImages:
      | CompressedFile[]
      | ((prevImages: CompressedFile[]) => CompressedFile[]),
  ) => void;
};
