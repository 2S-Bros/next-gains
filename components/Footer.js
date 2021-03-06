import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} Epic Gains</p>

      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a>User Settings</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a>Terms and Conditions</a>
            </Link>
          </li>
          <li>
            <Link href="/exercises">
              <a>Exercises</a>
            </Link>
          </li>
          <li>
            <Link href="/workouts">
              <a>Workouts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  background: var(--blue-600);
  margin-top: auto;
  text-align: center;
  p {
    text-align: center;
    color: var(--white);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    color: var(--white);
  }
`
