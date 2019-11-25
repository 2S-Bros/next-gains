import { useState } from "react"
import { withApollo } from "../lib/apollo"
import Layout from "../components/Layout"
import Modal from "../components/Modal"

const Home = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Layout>
      <h1>Epic Gains</h1>
      <button onClick={() => setIsActive(true)}>Test Modal</button>
      {isActive && (
        <Modal closeAction={() => setIsActive(false)} maxWidth="375px">
          <p>I'm a test modal</p>
        </Modal>
      )}
    </Layout>
  )
}

export default withApollo(Home)
