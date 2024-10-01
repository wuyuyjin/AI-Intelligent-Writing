import './index.css';
import {ChangeEvent} from "react";

interface NMUIInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const NMUIInput = ({ placeholder, onChange }: NMUIInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="NMUIInput"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default NMUIInput;
