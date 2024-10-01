import './index.css';
import { MouseEventHandler } from 'react';

interface IndexProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: string;
}

const Index = ({ text, onClick, type }:IndexProps) => {
  // 根据type值设置按钮的className
  const buttonClass = `NMUIButton ${type ? type : ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Index;
