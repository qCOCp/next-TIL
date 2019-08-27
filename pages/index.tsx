import React from 'react'
import { HOCLayout as withLayout } from '../components/Layout'

/**
 * BASIC {props.children}
 */
// const Index: React.FunctionComponent = () => (
//   <Layout>
//     <p>Hello Next.js</p>
//   </Layout>
// )

// export default Index

/**
 * HOC
 */
const Page: React.FunctionComponent = () => <p>Hello Next.js</p>

export default withLayout(Page)
