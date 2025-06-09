type ImageSettingsProps = {
  maxImageWidth: number;
  maxImageHeight: number;
  minImageWidth: number;
  minImageHeight: number;
  setMaxImageWidth: React.Dispatch<React.SetStateAction<number>>;
  setMaxImageHeight: React.Dispatch<React.SetStateAction<number>>;
  setMinImageWidth: React.Dispatch<React.SetStateAction<number>>;
  setMinImageHeight: React.Dispatch<React.SetStateAction<number>>;
};

export const Settings = ({
  maxImageWidth,
  maxImageHeight,
  minImageWidth,
  minImageHeight,
  setMaxImageWidth,
  setMaxImageHeight,
  setMinImageWidth,
  setMinImageHeight,
}: ImageSettingsProps) => {
  const settingsItems = [
    {
      label: "Max width",
      id: "maxImageWidth",
      value: maxImageWidth,
      setValue: setMaxImageWidth,
      min: minImageWidth + 100,
      max: 2000,
    },
    {
      label: "Max height",
      id: "maxImageHeight",
      value: maxImageHeight,
      setValue: setMaxImageHeight,
      min: minImageHeight + 100,
      max: 2000,
    },
    {
      label: "Min width",
      id: "minImageWidth",
      value: minImageWidth,
      setValue: setMinImageWidth,
      min: 100,
      max: maxImageWidth - 200,
    },
    {
      label: "Min height",
      id: "minImageHeight",
      value: minImageHeight,
      setValue: setMinImageHeight,
    },
  ];
  return (
    <>
      <p className="font-bold">Settings for the output file</p>
      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-4">
        {settingsItems.map((item) => (
          <div className="">
            <label htmlFor={item.id}>
              {item.label} {item.value} (px)
            </label>
            <input
              type="range"
              id={item.id}
              value={item.value}
              min={item.min}
              max={item.max}
              onChange={(e) => item.setValue(parseInt(e.target.value))}
            />
          </div>
        ))}
      </div>
    </>
  );
};
