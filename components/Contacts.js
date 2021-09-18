import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import theme from "../theme-new";
import { contactLocationsForPathnames } from "../constants";
import { Text, SmallText } from "./Text";
import { IconPhone, IconEmail, IconAddress, IconOpen } from "./Icons";

const locationList = [
  {
    name: "Campsie Head Office",
    subOne: "8 Anglo Road",
    subTwo: "Campsie, NSW 2194",
    openOne: "Monday-Thursday 9-5.30pm",
    openTwo: "Friday 9-5pm",
    openThree: "Saturday 9-4pm",
    phoneNumber: "02 9784 7900",
    faxNumber: "02 9787 2952",
    email: "campsie@vjray.com.au",
    poBox: "PO Box 369 Campsie, NSW 2194",
    emergencyPhoneNumber: "1300 073 405",
    googleMapsUrl:
      "https://www.google.com.au/maps/place/V+J+Ray/@-33.9113278,151.1011612,17z",
    imageName: "campsie.jpg",
  },
  {
    name: "Caringbah Office",
    subOne: "18 President Avenue",
    subTwo: "Caringbah, NSW 2229",
    openOne: "Monday-Thursday 9-5.30pm",
    openTwo: "Friday 9-5pm",
    openThree: "Saturday 9-2pm",
    phoneNumber: "02 9541 3300",
    faxNumber: "02 9643 2220",
    email: "caringbah@vjray.com.au",
    poBox: "PO Box 369 Campsie, NSW 2194",
    emergencyPhoneNumber: "1300 073 405",
    googleMapsUrl:
      "https://www.google.com.au/maps/place/V.J.+Ray/@-34.0432583,151.1198929,17z",
    imageName: "caringbah.jpg",
  },
];

const LocationRoot = styled(Box)`
  @media (max-width: 700px) {
    margin-left: auto;
    margin-right: auto;

    :last-child {
      margin-top: 3rem;
    }
  }
`;

const ItemsBox = styled(Box)`
  border-bottom: 1px solid ${theme.colors.text20};
  border-top: 1px solid ${theme.colors.text20};
`;

const Item = styled(Flex)`
  align-items: flex-start;
  color: ${theme.colors.text70} !important;
  padding: 0.333rem 0;
  text-align: left;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const ItemBody = styled("div")`
  color: ${theme.colors.text70} !important;
  flex: 1;
`;

const Location = props => (
  <LocationRoot px={[4, 3]} width={props.width}>
    <Link href={props.location.googleMapsUrl}>
      <a>
        <img src={`/static/img/${props.location.imageName}`} alt="map" />
      </a>
    </Link>

    <Box my={3}>
      <Link href={props.location.googleMapsUrl}>
        <a>
          <Text color="text" align="left" font="textRegular">
            {props.location.name}
          </Text>
          <Text color="text70" align="left">
            {props.location.subOne}
          </Text>
          <Text color="text70" align="left">
            {props.location.subTwo}
          </Text>
        </a>
      </Link>
    </Box>

    <ItemsBox py={1}>
      <Link href={`tel:${props.location.phoneNumber}`}>
        <a>
          <Item borderTop>
            <div>
              <IconPhone contact />
            </div>
            {props.location.phoneNumber}
          </Item>
        </a>
      </Link>

      <Link href={`mailto:${props.location.email}`}>
        <a>
          <Item>
            <div>
              <IconEmail contact />
            </div>
            {props.location.email}
          </Item>
        </a>
      </Link>

      <Item>
        <div>
          <IconOpen contact />
        </div>
        <ItemBody>
          <SmallText color="text70">{props.location.openOne}</SmallText>
          <SmallText color="text70">{props.location.openTwo}</SmallText>
          <SmallText color="text70">{props.location.openThree}</SmallText>
        </ItemBody>
      </Item>

      <Item>
        <div>
          <IconAddress contact />
        </div>
        {props.location.poBox}
      </Item>
    </ItemsBox>
  </LocationRoot>
);

Location.propTypes = {
  location: PropTypes.object.isRequired,
  width: PropTypes.string,
};

const Contact = props => (
  <Flex direction={["column", "row"]} justify="center" mt={[3, 3, 4]} mx={-3}>
    {locationList
      // Only show locations configured for the current page in constants.js
      .filter(location =>
        contactLocationsForPathnames[props.pathname].locations.includes(
          location.name,
        ),
      )
      .map((location, i) => (
        <Location location={location} key={i} width={props.width} />
      ))}
  </Flex>
);

Contact.propTypes = {
  pathname: PropTypes.string,
  maxWidth: PropTypes.string,
};

Contact.defaultProps = {
  pathname: "/",
};

export default Contact;
