import {Outlet} from 'react-router-dom';
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {Toaster} from "react-hot-toast";

const App = () => {
  const [animationParent] = useAutoAnimate()

  // const navItems = [
  //   { name: 'AI写作', icon: '/path/to/home-icon.png' },
  //   { name: '每日福利', icon: '/path/to/search-icon.png' },
  //   { name: '我的', icon: '/path/to/profile-icon.png' }
  // ];

  return (
    <div className="bg-[#E8EFF6] w-full h-screen flex flex-col">
        <div className="flex-grow overflow-auto" ref={animationParent}>
          <Outlet/>
        </div>
      {/*<NMUIBottomNavigation navItems={navItems} />*/}
      <Toaster/>
    </div>
  );
};

export default App;
