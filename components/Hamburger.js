import styled, { css } from "styled-components";
import theme from "../theme-new";

const Hamburger = styled.div`
  --bar-height: 3px;
  --bar-spacing: 9px;
  width: 2rem;
  height: calc((var(--bar-spacing) * 2) + var(--bar-height));
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: var(--bar-height);
    width: 100%;
    background: currentColor;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .15s ease-in-out;
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2), span:nth-child(3) {
    top: var(--bar-spacing);
  }

  span:nth-child(4) {
    top: calc(var(--bar-spacing) * 2);
  }

  ${props => props.isOpen && css`
    span:nth-child(1) {
      top: var(--bar-spacing);
      width: 0%;
      left: 50%;
    }

    span:nth-child(2) {
      transform: rotate(45deg);
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
    }

    span:nth-child(4) {
      top: var(--bar-spacing);
      width: 0%;
      left: 50%;
    }
  `}
`;

export default Hamburger;
