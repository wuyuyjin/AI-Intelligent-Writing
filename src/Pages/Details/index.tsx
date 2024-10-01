import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import NMUITextarea from "../../NeumorphicUI/NMUITextarea";
import NMUICard from "../../NeumorphicUI/NMUICard";
import useReferenceCopyStore from "../../store/useReferenceCopyStore";
import NMUIButton from "../../NeumorphicUI/NMUIButton";
import ChatMethod from "../../server/ChatMethod.tsx";
import toast from "react-hot-toast";

const Index = () => {
  const [searchParams] = useSearchParams()
  const [inputData, setInputData] = useState(sessionStorage.getItem("question") || "");

  const referenceCopy = useReferenceCopyStore.use.referenceCopy()
  const changeReferenceCopy = useReferenceCopyStore.use.changeReferenceCopy();
  const navigation = useNavigate()
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const {IFlytekChat} = ChatMethod()

  useEffect(() => {
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

  const saveValue = (value: string) => {
    setInputData(value)
    sessionStorage.setItem("question",value)
  }


  const goto = () => {
    navigation('/referenceCopy')
  }

  const handleSubmit = () => {
    let data;

    if (referenceCopy){
      data = {
        question: inputData,
        // promptId: 1,
        prompt: referenceCopy,
        status: 1
      }
    }else {
      data = {
        question: inputData,
        promptId: 1,
        // prompt: referenceCopy,
        status: 0
      }
    }

    console.log(data)
    if (inputData) {
      IFlytekChat(data)
      changeReferenceCopy("")
      toast.success(`正在生成${searchParams.get("title")}😜`)
      navigation(`/result?question=${inputData}`)
    } else {
      toast.error("笔记内容不能为空！😵")
    }

  }

  return (
    <div>
      <div className="flex flex-col m-2">
        <p className="text-md font-bold">
          #{searchParams.get('title')}#
        </p>
        <p className="text-sm text-gray-400">
          {searchParams.get('content')}
        </p>
      </div>

      <div className="flex justify-center h-60">
        <NMUITextarea
          placeholder="请输入笔记内容"
          onChange={value => saveValue(value)}
          value={sessionStorage.getItem("question") || ""}
        />
      </div>

      <div onClick={() => goto()}>
        <NMUICard>
          <div className="flex flex-row justify-between">
            <p>参考文案</p>
            <p>{referenceCopy.length > 0 ? "已填写 >" : "未填写 >"}</p>
          </div>
        </NMUICard>
      </div>

      <NMUICard>
        <div className="flex flex-row justify-between">
          <p>生成字段（仅参考）</p>
          <p>300字</p>
        </div>
      </NMUICard>

      {/*<NMUICard>*/}
      {/*  <div className="flex flex-row justify-between">*/}
      {/*    <p>语言</p>*/}
      {/*    <p>中文 ></p>*/}
      {/*  </div>*/}
      {/*</NMUICard>*/}

      {!isKeyboardVisible && (
        <div className="flex justify-center mt-44">
          <NMUIButton text={"提交"} type="Primary" onClick={() => handleSubmit()}/>
        </div>
      )}
    </div>
  )
}

export default Index