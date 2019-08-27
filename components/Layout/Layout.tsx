import React from 'react'
import Header from '../Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

/**
 * props.children
 */
// const Layout: React.FunctionComponent = (props) => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.children}
//   </div>
// )

// export default Layout

/**
 * HOC
 */
const withLayout = (Page: any) => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  )
}

export default withLayout
