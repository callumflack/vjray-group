import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled, { css } from "styled-components";
import theme from "../theme-new";

// prettier-ignore
const ItemAnchor = styled("span")`
  ${props => props.rule && css`
    border-top: 1px solid ${theme.colors.text20};
    display: block;
    margin-top: 6px;
    padding-top: 6px;
  `}
`;

const FooterItem = props => (
  <Link href={props.link}>
    <a>
      <ItemAnchor rule={props.rule}>
        {props.bold ? <em>{props.label}</em> : <span>{props.label}</span>}
      </ItemAnchor>
    </a>
  </Link>
);

FooterItem.PropTypes = {
  link: PropTypes.string,
  rule: PropTypes.bool,
  bold: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

FooterItem.defaultProps = {
  rule: false,
  bold: false,
};

export default FooterItem;
