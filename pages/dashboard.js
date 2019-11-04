import Layout from "../components/Layout"

const Dashboard = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <p>
        Should only be accessible to logged in users and home should redirect
        here for people logged in. This will not have a link in the nav.
      </p>
    </Layout>
  )
}

export default Dashboard
