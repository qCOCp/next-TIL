import React from 'react'
import Link from 'next/link'
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

const PostLink = (props: any) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

/**
 * HOC
 */
const Blog: React.FunctionComponent = () => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="Hello-nextjs" />
        <PostLink id="Learn-nextjs-is-awesome" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </>
  )
}

export default withLayout(Blog)
