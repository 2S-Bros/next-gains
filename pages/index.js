import { withApollo } from "../lib/apollo"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <h1>Epic Gains</h1>
    </Layout>
  )
}

export default withApollo(Home)
