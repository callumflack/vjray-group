import styled, { css } from 'styled-components';
import { Box } from 'rebass';
import theme from '../theme.js';

// https://www.styled-components.com/docs/basics#extending-styles?
// const ContainerSm = Container.extend` <= NAH
// width: 100%;
// @media (max-width: 767px) {
//   max-width: 100%;
// }

const Root = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  position: relative;

  ${props => props.fullSize && css`
    height: 100%;
    width: 100%;
  `}

  ${props => !props.mw && css`
    max-width: ${theme.containers.rg};
  `}

  ${props => props.mw && css`
    max-width: ${theme.containers[props.mw]};
  `}

  ${props => props.relative && css`
    position: relative;
  `}

  ${props => props.textCenter && css`
    text-align: center;
  `}

  ${props => props.center && css`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
  `}

  ${props => props.mobileBleed && css`
    @media (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  `}
`;

const Container = props =>
  <Root
    px={3}
    mx='auto'
    {...props}
  />

export default Container
