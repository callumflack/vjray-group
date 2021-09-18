import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { Box, Flex, Border } from "rebass";
import { Heading } from "./Headings";
import { SmallText } from "./Texts";
import icons from "./iconConstants";
import Icon from "./Icon";
import { featuresList } from "../constants";

// prettier-ignore
const Cell = styled(Box) `
  text-align: center;

  @media (max-width: 1024px) {
    :not(first-child) {
      margin-top: 1.5rem;
    }
  }
`;

const StyledBorder = styled(Border) `
  border-radius: 4px;
`;

const StyledHeading = styled(Heading) `
  :after {
      content: '►';
      font-size: 55%;
      margin-left: 8px;
      position: relative;
      top: -1px;
    }
`;

const Feature = props => (
  <Cell w={[1, 1 / 2, 1 / 2, 1 / 4]} px={3}>
    <Link href={props.item.link}>
      <a>
        <Box w={[1, 11 / 12]} mx="auto" mb={[2, 2, 0]}>
          <StyledBorder borderWidth={props.item.border ? "2px" : "0"} color="brand">
            <Box p={2}>
              <Icon color="brand" size="90" icon={icons[props.item.icon]} />
              <StyledHeading
                center
                color="brand"
                family="displayMedium"
                fontSize={[3, 4]}
                mt={[0, 2]}
                mb={[1, 2]}
              >
                {props.item.headline}
              </StyledHeading>
            </Box>
            <SmallText color="text70" m={3} mt={0}>
              {props.item.lede}
            </SmallText>
          </StyledBorder>
        </Box>
      </a>
    </Link>
  </Cell>
);

const FeatureList = props => (
  <Box w={[5 / 6, 5 / 6, 5 / 6, 1]} mx="auto" mt={[3, 3, 4, 5]}>
    <Flex mx={-3} wrap={["wrap", "nowrap"]} justify="center">
      {featuresList.map((item, i) => <Feature border item={item} key={i} />)}
    </Flex>
  </Box>
);

Feature.PropTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    border: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    lede: PropTypes.string,
  }),
};

Feature.defaultProps = {
  link: " ",
  border: false,
  icon: " ",
  headline: " ",
  lede: " ",
};

export default FeatureList;
