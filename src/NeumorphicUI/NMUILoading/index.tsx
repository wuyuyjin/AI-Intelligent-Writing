import './index.css'

const Index = ({loading, children}: { loading: boolean, children: any }) => {
  if (!loading) {
    return children
  }

  return (
    <div className="NMUILoading-container">
      <div className="NMUILoading"></div>
    </div>
  )
}

export default Index