import React from "react"
import Head from "next/head"
import Nav from "../components/nav"
import Layout from "../../components/Layout"

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <Layout>
      <h1>Home</h1>
    </Layout>
  </div>
)

export default Home
