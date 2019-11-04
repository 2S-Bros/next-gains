import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Epic Gains</p>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>
                <strong>EPIC GAINS</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="user-settings">
              <a>User Settings</a>
            </Link>
          </li>
          <li>
            <Link href="about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="privacy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="terms">
              <a>Terms and Conditions</a>
            </Link>
          </li>
          <li>
            <Link rel="prefetch" href="exercises">
              <a>Exercises</a>
            </Link>
          </li>
          <li>
            <Link rel="prefetch" href="workouts">
              <a>Workouts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
