import NMUICard from "../../NeumorphicUI/NMUICard";
import { useSearchParams } from "react-router-dom";
import useResultStore from "../../store/useResultStore";
import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";

const Index = () => {
  const [searchParams] = useSearchParams();
  const result = useResultStore.use.result();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // 预处理 result
  const processedResult = result ? result.replace(/undefined/g, '').replace(/\n/g, '<br />') : '';

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-lvh">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div>
      <NMUICard>
        <p className="text-left">笔记描述：{searchParams.get("question")}</p>
      </NMUICard>
      <NMUICard>
        <div className="text-left" dangerouslySetInnerHTML={{ __html: processedResult }} />
      </NMUICard>
    </div>
  );
};

export default Index;
