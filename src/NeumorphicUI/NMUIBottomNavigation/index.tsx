import './index.css';

const Index = ({ navItems }: {navItems: any}) => {
  return (
    <div className="NMUIBottomNavigation">
      {navItems.map(({item, index}: {item: any,index: number}) => (
        <div key={index} className="nav-item">
          <img src={item.icon} alt={item.name} className="nav-icon" />
          <span className="nav-text">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Index;
