import {FaUpload} from "react-icons/fa";

export const InputFiles = ({
  prevFiles,
  setIsLoading,
  setFiles,
}: {
  prevFiles: File[];
  setIsLoading: (isLoading: boolean) => void;
  setFiles: (files: File[]) => void;
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log("Files received", files);
    if (files) {
      setIsLoading(true);
      setFiles([...prevFiles, ...Array.from(files)]);
    }
  };

  return (
    <div className="border-2 w-full min-h-40 border-dashed border-mainText backdrop-blur-3xl rounded-md hover:bg-slate-950/5 duration-200 relative">
      <input
        className="w-full h-full opacity-0"
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        multiple
      />
      <div className="text-mainText text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <p>Drag and drop or click to select images</p>
        <FaUpload className="text-2xl inline-block" />
      </div>
    </div>
  );
};
