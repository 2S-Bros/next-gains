import styled, { css } from "styled-components"

const baseButton = css`
  display: inline-block;
  text-align: center;
`

export const globalButton = css`
  button.btn {
    ${baseButton};
  }
`

// Close button will always have these styles and the x
export const CloseButton = props => <CloseBtn {...props}>x</CloseBtn>

// This exists just for styles
export const CloseBtn = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 0;
  text-align: center;
  font-weight: bold;
`
