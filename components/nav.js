import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Nav = () => (
  <NavWrapper>
    <ul>
      <li>
        <Link href="/">
          <a>
            <strong>EPIC GAINS</strong>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/dashboard">
          <a>Dashboard</a>
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
      <li>
        <Link href="/timer">
          <a>Timer</a>
        </Link>
      </li>
    </ul>
  </NavWrapper>
)

export default Nav

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(249, 170, 51, 0.2);
  font-weight: 300;
  padding: 0 1em;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    &.selected {
      position: relative;
      display: inline-block;
      border-bottom: 1px solid var(--primaryColor);
    }
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    color: var(--textColor);
    &.brand {
      color: var(--primaryColor);
    }
  }
`
