import { useRouter } from 'next/router'
import { Layout } from '../components/Layout'

const Page = () => {
  const router = useRouter()

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>EDIT.</p>
    </Layout>
  )
}

export default Page
