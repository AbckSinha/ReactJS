import React from 'react'
import logo from 'assets/logo.svg'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopBar = styled.div`
  background-color: yellow;
  height: 100px;
  padding: 20px;
  color: green;
  font-size: 20px;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 180px;
  }
`

function Header() {
  return (
    <TopBar>
      <h2>Sample Redux App</h2>
    </TopBar>
  )
}

export default Header
