import NMUITextarea from "../../NeumorphicUI/NMUITextarea";
import { useState, useEffect } from "react";
import NMUIButton from "../../NeumorphicUI/NMUIButton";
import useReferenceCopyStore from "../../store/useReferenceCopyStore";
import {useNavigate} from "react-router-dom";

const Index = () => {
  const [inputData, setInputData] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const changeReferenceCopy = useReferenceCopyStore.use.changeReferenceCopy();
  const referenceCopy = useReferenceCopyStore.use.referenceCopy()
  const navigate = useNavigate();

  useEffect(() => {
    // 从本地存储恢复数据
    const savedData = referenceCopy;
    if (savedData) {
      setInputData(savedData);
    }

    const handleResize = () => {
      const currentHeight = window.innerHeight;
      const heightThreshold = window.screen.height * 0.7;
      if (currentHeight < heightThreshold) {
        setIsKeyboardVisible(true);
      } else {
        setIsKeyboardVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChange = (value: string) => {
    setInputData(value);
    // 保存数据到本地存储
    localStorage.setItem("inputData", value);
  };

  const handleSubmit = () => {
    console.log(inputData);
    changeReferenceCopy(inputData);
    // 你可能想在提交后清除本地存储中的数据
    // localStorage.removeItem("inputData");
    // navigate( "/details",{replace: true})
    navigate(-1)
  };

  return (
    <>
      <div className="flex justify-center m-2 h-4/5">
        <NMUITextarea
          placeholder="请输入参考文案，建议3个案例，AI会学会文案生成更符合您预期的高质量的文案"
          onChange={handleInputChange}
          value={inputData} // 传递 value 属性
        />
      </div>
      {!isKeyboardVisible && (
        <div className="flex justify-center">
          <NMUIButton text={"提交"} type="Primary" onClick={handleSubmit} />
        </div>
      )}
    </>
  );
};

export default Index;
