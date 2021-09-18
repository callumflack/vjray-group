import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import { Display } from "./Headings";
import { LargeText, Text, PrimaryButtonText } from "./Texts";
import { ButtonOutline } from "./Buttons";
import Icon from "./Icon";
import icons from "./iconConstants";
import theme from "../theme-new";

const ItemRoot = styled(Flex)`
  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemIcon = styled(Icon)`
  @media (min-width: 768px) {
    transform: translateY(-20px);
  }
`;

const ItemNumber = styled(Display)`
  height: 50px;
  margin: 0;
  padding-top: 4px;
  position: relative;
  text-align: center;
  transform: translateY(-6px);
  width: 50px;

  &:before {
    border: 2px solid ${theme.colors.text};
    border-radius: 999px;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const ListItem = props => (
  <ItemRoot direction={["column", "row"]} mx={-3} mb={props.smallSpace ? [3, 4] : [4, 5]}>
    {props.item.icon && (
      <Box px={3}>
        <ItemIcon color="text" size="90" icon={icons[props.item.icon]} />
      </Box>
    )}
    {props.item.number && (
      <Box px={3}>
        <ItemNumber family="displayRegular" color="text" m={0}>
          {props.item.number}
        </ItemNumber>
      </Box>
    )}
    <Box px={3}>
      <LargeText as="h4" color="text" family="displayRegular" mb={2}>
        {props.item.headline}
      </LargeText>
      <Text color="text70">
        {props.item.text}
        {props.item.link && (
          <Link href={props.item.link}>
            <a>Find out more</a>
          </Link>
        )}
      </Text>
      {props.item.buttonUrl && (
        <PrimaryButtonText align="left" color="white" mt={3}>
          <Link href={props.item.buttonUrl} passHref>
            <a>
              <ButtonOutline brandBg icon color="brand">
                {props.item.buttonLabel}
              </ButtonOutline>
            </a>
          </Link>
        </PrimaryButtonText>
      )}
    </Box>
  </ItemRoot>
);

ListItem.propTypes = {
  smallSpace: PropTypes.bool,
  icon: PropTypes.string,
  headline: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string
};

ListItem.defaultProps = {
  smallSpace: true
};

export default ListItem;
