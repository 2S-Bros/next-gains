require("dotenv").config()
const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = {
  experimental: { publicDirectory: true },
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ]
    // config.resolve.alias.imports = path.join(__dirname)
    // config.resolve.alias.api = path.join(__dirname, "api")
    // config.resolve.modules.push(path.resolve("./"))
    return config
  }
}
