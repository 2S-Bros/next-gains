import { useEffect } from "react"
import Layout from "../components/Layout"

const Settings = () => {
  useEffect(() => {
    const toggleSelect = document.querySelector("#theme-select")
    function switchTheme(e) {
      document.documentElement.setAttribute("data-theme", e.target.value)
    }
    toggleSelect.addEventListener("change", switchTheme, false)
  })
  return (
    <Layout>
      <h1>Settings</h1>
      <p>
        Should only be accessible to logged in users and home should redirect
        here for people logged in. This will have a link from user menu in the
        nav.
      </p>

      <label for="theme-select">Theme</label>
      <select name="theme-select" id="theme-select">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="oled">OLED</option>
      </select>
    </Layout>
  )
}

export default Settings
