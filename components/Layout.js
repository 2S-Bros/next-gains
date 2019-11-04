import Head from "next/head"
import Nav from "./Nav"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
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
