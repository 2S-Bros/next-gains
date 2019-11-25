import Head from "next/head"
import Nav from "./nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
