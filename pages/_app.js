import App from "next/app"
import React from "react"
import GlobalStyles from "../styles/GlobalStyles"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    )
  }
}
