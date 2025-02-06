import { useState } from "react";

type SliderProps = {
  initialValue?: number;
};

const Slider: React.FC<SliderProps> = ({ initialValue = 50 }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex items-center w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        // onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-1 bg-[var(--secondary)] rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default Slider;
