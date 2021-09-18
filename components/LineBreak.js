import styled from "styled-components";
import { displayBreakPoint } from "./utils";

const LineBreak = styled.span`
  font: inherit;
  display: block;
  ${displayBreakPoint}
`;

export default LineBreak;
