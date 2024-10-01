import './index.css';
import { ChangeEvent } from "react";

interface NMUITextareaProps {
  placeholder: string;
  onChange: (value: string) => void;
  value?: string; // 添加 value 属性
}

const NMUITextarea = ({ placeholder, onChange, value }: NMUITextareaProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      className="NMUITextarea"
      placeholder={placeholder}
      onChange={handleChange}
      value={value} // 绑定 value 属性
    />
  );
};

export default NMUITextarea;
