import NMUIAvatar from "../../../NeumorphicUI/NMUIAvatar";
import avatar from "../../../assets/img.png";
import NMUICard from "../../../NeumorphicUI/NMUICard";

const Header = () => {
  return (
    <NMUICard>
      <div className="flex flex-row">
        <NMUIAvatar src={avatar}/>
        <div className="m-4">
          <p className="text-md font-bold">Hi，欢迎使用AI写作服务</p>
          <p className="mt-2 text-sm"><a className="text-blue-900 decoration-blue-50 text-md">添加到桌面 </a>使用起来更加方便
          </p>
        </div>
      </div>
    </NMUICard>
  )
}

export default Header