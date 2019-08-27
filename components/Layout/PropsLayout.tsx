import React from 'react'
import Header from '../Header'

type Props = {
  content: JSX.Element
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

/**
 * props.content
 */
const PropsLayout = (props: Props) => (
  <div style={layoutStyle}>
    <Header />
    {props.content}
  </div>
)

export default PropsLayout
