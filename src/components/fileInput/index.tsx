import React, {useState} from "react";

export const FileInput = () => {
  const [imageAssets, setImageAssets] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setImageAssets(files);
  };

  console.log(imageAssets);
  return (
    <div className="shadow-lg rounded-md p-4 backdrop-blur-sm">
      <input type="file" multiple onChange={handleInputChange} />
    </div>
  );
};
