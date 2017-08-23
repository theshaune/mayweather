import styled, { css } from 'styled-components'

// Styles
const isPrimary = css`
  background-color: #ff0000;
  box-shadow: 0 0 rgba(0, 0, 0, 0.15);
  color: #ffffff; 
  transition: .25s;

  &:hover {
    box-shadow: 6px 5px rgba(0, 0, 0, 0.15);
  }

  &:active {
    box-shadow: 2px 2px rgba(0, 0, 0, 0);
    transform: translate3d(0, 0, 0);;
  }
`

const isNude = css`
  color: rgb(58,58,58);
`

const isHidden = css`
  opacity: 0;
`

// Component
export const Button = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: .5rem;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  Justify-content: center;
  padding: 1rem 2rem;
  outline: none;
  text-transform: uppercase;
  transition: 1s;

  ${props => props.nude && isNude};
  ${props => props.primary && isPrimary};
  ${props => props.hidden && isHidden};
`

export default Button
