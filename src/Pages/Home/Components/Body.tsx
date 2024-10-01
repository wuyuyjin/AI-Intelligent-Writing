import NMUICard from '../../../NeumorphicUI/NMUICard';
import {IconAdCircleFilled} from '@tabler/icons-react';
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";


interface ItemType {
  title: string;
  content: string;
  icon: JSX.Element;
  colorOne?: string;
  colorTwo?: string;
}

const Body = () => {
  const navigate = useNavigate();
  const popularTemplates: ItemType[] = [
    {
      title: '自定义内容',
      content: '输入标题和描述生成内容',
      icon: <IconAdCircleFilled/>,
      colorOne: "#E5EFF6",
      colorTwo: "",
    },
    {
      title: '小红书文案',
      content: '生成小红书风格的文案',
      icon: <IconAdCircleFilled/>,
      colorOne: "#A1C5EC",
      colorTwo: "#3E6EFD",
    },
    {
      title: '起名',
      content: '输入内容生成名字',
      icon: <IconAdCircleFilled/>,
      colorOne: "#C2C5E9",
      colorTwo: "#E6DDE9"
    },
    {
      title: '写诗',
      content: '根据主题生成诗文',
      icon: <IconAdCircleFilled/>,
      colorOne: "#CEDEF0",
      colorTwo: "#9DE8A1",
    },
    {
      title: '作文',
      content: '根据内容生成作文',
      icon: <IconAdCircleFilled/>,
      colorOne: "#A687E8",
      colorTwo: "#06EBFE"
    },
    {
      title: '心得体会',
      content: '输入内容生成心得体会',
      icon: <IconAdCircleFilled/>,
      colorOne: "#F59FAE",
      colorTwo: "#B1BCEB"
    },
    {
      title: '节目串词',
      content: '根据主题和要点生成节目串词',
      icon: <IconAdCircleFilled/>,
      colorOne: "#F472D5",
      colorTwo: "#C873F4"
    },
    {
      title: '批改作文',
      content: '批改：评分、总批、建议',
      icon: <IconAdCircleFilled/>,
      colorOne: "#B1EDCD",
      colorTwo: "#F5ED9E"
    },
  ];

  const goto = (item: ItemType) => {
    // console.log(item);
    if (item.title === "作文" || item.title === "心得体会" || item.title === "节目串词" || item.title === "批改作文" || item.title === "自定义内容") {
      toast("正在加班加点开发中，请期待...", {
        icon: "🐮🐎"
      })
    } else {
      sessionStorage.removeItem("question")
      navigate(`/details?title=${item.title}&content=${item.content}`)
    }
  };

  return (
    <div className="mb-24">
      {/* 热门模版 */}
      <div>
        <p className="text-xl font-bold m-4">热门模版</p>
        <div className="flex flex-row flex-wrap">
          {popularTemplates.map((item, index) => (
            <div key={index} className="w-1/2" onClick={() => goto(item)}>
              <NMUICard>
                <div className="flex flex-row justify-between flex-wrap">
                  <p className="text-left font-bold">{item.title}</p>
                  {item.icon}
                </div>
                <p className="text-left text-sm mt-2 truncate">{item.content}</p>
              </NMUICard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
