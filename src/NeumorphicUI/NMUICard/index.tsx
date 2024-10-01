import "./index.css"

interface NMUICardType {
  children: any,
  colorOne?: string,
  colorTwo?: string
}

const Index = ({children, colorOne}: NMUICardType) => {
  const cardColor = {
    background: `${colorOne}` // 你可以动态设置颜色
  }
  return (
    <div className={`NMUICard`} style={cardColor}>
      {children}
    </div>
  )
}

export default Index