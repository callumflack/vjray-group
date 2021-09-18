import styled, { css } from "styled-components";
import hoc from "./hoc";
import theme from "../theme-new";

// https://codepen.io/sdras/pen/a3596da23d8f9463079ac57c8e3ee9f8?editors=1010
// https://github.com/zeit/next.js/tree/master/examples/svg-components

// prettier-ignore
const Icon = hoc("span").extend`
  --Icon-vertical-align: baseline;
  display: inline-block;
  line-height: 1;
  position: relative;
  text-align: center;

  > svg {
    fill: currentColor;
    vertical-align: var(--Icon-vertical-align);
  }

  ${props => props.color && css`
    color: ${theme.colors[props.color] || "currentColor"};
  `}

  ${props => props.contact && css`
    --Icon-vertical-align: bottom;
    margin: 0 9px 0 3px;
  `}

  ${props => props.bottom && css`
    --Icon-vertical-align: bottom;
  `}

  ${props => props.navBar && css`
    --Icon-vertical-align: top;
    margin-right: 8px;
  `}
`;

const IconLogo = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="57"
      viewBox="0 0 90 57"
      aria-labelledby="title"
    >
      <title id="title">VJ Ray</title>
      <rect fill="none" width="90" height="57" />
      <path d="M44.85,0,.1,27.16l-.1.19H11.12l.1,10.25,67.67.1V27.55L90,27.45ZM25.23,32.87c-2.14.4-1.47-2.38-.48-3.09h.58l.58.48A2.22,2.22,0,0,1,25.23,32.87Zm.48-13.24L21.46,33.06l-2.9.1L16,21.65l2.22-1.45,1.64,8.31v.19H20l3.77-12L27,14.79C27.19,15.1,26,18.78,25.71,19.62Zm4.16,10.92-.29-4.93L31.42,24l.29-.1c.73,2.95-.85,4.63,1.55,6.19,2.57-.2,2.13-2.71,2.13-5.41l.1-14.89L38.09,8l.1,5.7c0,4.53.77,14.7-1.16,17.3C35.35,33.3,31.06,33.42,29.87,30.55Zm9.76,2.32a1.43,1.43,0,0,1-1.16-2.22c.22-.47.44-.52.87-.77a1.6,1.6,0,0,1,1.16.77A1.72,1.72,0,0,1,39.63,32.87Zm13.44.1H50.75c-.67-1.8-2-10-3.38-10.34l-.19,10.25-2.42.1.1-28.81C48.74,6.1,54,8.74,52.59,15.27a8.23,8.23,0,0,1-2.42,4.83l2.9,12.57Zm10.54,0-1.55-6.09h-4l-1.74,6a5.79,5.79,0,0,1-2.22.19L54,33l5.7-19.82c2.73,1.34,2.3,2.68,3.09,5.8l3.29,14.11Zm8.12-5.22L71.54,33H69.12c0-7.46-1.77-11.09-3.77-16.43l2.9,1.74,2.32,6.28,1.74-3.67a4.12,4.12,0,0,1,2,1.16C74,24.15,72.35,25.86,71.73,27.74ZM47.27,8.6V19h.1a6.67,6.67,0,0,0,1.93-8.6C48.84,9.57,48.45,8.77,47.27,8.6Zm13,10.92-1.35,4.83h2.61l-1.06-4.83ZM22.13,47.9H25v8.55h3.09V47.9h2.84V45.08H22.13Zm49-2.83L66.77,56.46h3.41l.7-2.13h3.89l.7,2.13h3.41L74.48,45.08Zm.49,6.81,1.17-3.56L74,51.89Zm-53.35-2L16,48.67c-.47-.24-.6-.41-.6-.62s.21-.42.7-.42a5.41,5.41,0,0,1,2.78.91l1.33-2.75a8.56,8.56,0,0,0-3.89-1c-2.86,0-4.28,1.41-4.28,3.45a3.45,3.45,0,0,0,2,3.22l2.49,1.25c.36.18.55.33.55.6s-.36.5-1,.5a6.15,6.15,0,0,1-3.56-1.4l-1.41,3A9.66,9.66,0,0,0,16,56.7c2.91,0,4.47-1.27,4.47-3.61A3.3,3.3,0,0,0,18.31,49.87Zm24.35-1.06c0-2-1.28-3.74-4.29-3.74H33.5V56.46h3.09V52.23l2.93,4.23h3.85l-3.15-4.23A3.41,3.41,0,0,0,42.66,48.81Zm-4.71,1.43H36.59V47.81h1.35c.94,0,1.51.36,1.51,1.2S38.89,50.25,37.94,50.25ZM57.59,47.9h2.84v8.55h3.09V47.9h2.84V45.08H57.59Zm-8.11-2.83L45.07,56.46h3.41l.7-2.13h3.89l.7,2.13h3.41L52.78,45.08ZM50,51.89l1.17-3.56,1.15,3.56Z" />
    </svg>
  </Icon>
);

const IconSun = function IconSun(props) {
  const fill = props.fill || theme.colors.brand;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      aria-labelledby="title"
    >
      <title id="title">Sun</title>
      <path
        fill={fill}
        d="M37.16,0H34.84V9.28h2.32Zm6.1,5.47L41,5l-.91,4.56,2.28.45ZM31.93,9.57,31,5l-2.28.45L29.65,10ZM50.85,3.19,48.7,2.3l-3.56,8.59,2.15.88Zm-28.73,10L19.54,9.28l-1.93,1.29,2.58,3.87Zm-7.68,7-3.86-2.58L9.28,19.55l3.86,2.58ZM11.76,24.7,3.19,21.15,2.3,23.3l8.59,3.56Zm6.16-8.41L11.36,9.73,9.72,11.37l6.56,6.56Zm48.6,27L67,41l-4.56-.91L62,42.35Zm0-14.51L62,29.65l.45,2.28L67,31Zm-5.41-1.89L69.7,23.3l-.89-2.15L60.24,24.7ZM36,13.89A22.11,22.11,0,1,0,58.11,36,22.14,22.14,0,0,0,36,13.89Zm0,41.9A19.79,19.79,0,1,1,55.79,36,19.8,19.8,0,0,1,36,55.79ZM55.7,17.93l6.56-6.56L60.63,9.72l-6.56,6.56Zm-3.9-3.49,2.58-3.87L52.46,9.28l-2.58,3.87Zm5.76,5.75,1.29,1.93,3.87-2.58-1.29-1.93Zm-30.7-9.31L23.3,2.3l-2.15.89,3.56,8.57Zm23,48,2.58,3.87,1.93-1.29-2.58-3.87ZM5.47,28.74,5,31l4.56.91L10,29.65Zm48.59,27,6.56,6.56,1.64-1.64L55.7,54.07Zm-14,6.71L41,67l2.28-.45L42.35,62ZM34.84,72h2.32V62.72H34.84ZM62.72,34.84v2.32H72V34.84Zm-5.16,17,3.86,2.58,1.29-1.93-3.86-2.58Zm2.68-4.51,8.57,3.56.89-2.15-8.59-3.56ZM45.15,61.12,48.7,69.7l2.15-.89L47.3,60.23ZM14.44,51.8l-1.29-1.93L9.28,52.45l1.29,1.93Zm-5.16-17H0v2.32H9.28Zm1.6,10.31L2.29,48.71l.89,2.15,8.59-3.56ZM28.74,66.53,31,67l.91-4.56L29.65,62ZM5,41l.45,2.28L10,42.35l-.45-2.28ZM21.16,68.82l2.15.89,3.55-8.58-2.15-.89Zm-1-11.26-2.58,3.87,1.93,1.29,2.58-3.87Zm-3.91-3.49L9.72,60.63l1.64,1.64,6.56-6.56Z"
      />
    </svg>
  );
};

const IconDownload = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-labelledby="title"
    >
      <title id="title">Download</title>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
  </Icon>
);

const IconContact = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-labelledby="title"
    >
      <title id="title">Contact</title>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" />
    </svg>
  </Icon>
);

const IconPhone = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-labelledby="title"
    >
      <title id="title">Phone</title>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  </Icon>
);

const IconEmergency = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-labelledby="title"
    >
      <title id="title">Emergency</title>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z" />
    </svg>
  </Icon>
);

const IconEmail = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-labelledby="title"
    >
      <title id="title">Email</title>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  </Icon>
);

const IconAddress = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-labelledby="title"
    >
      <title id="title">Address</title>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
    </svg>
  </Icon>
);

const IconOpen = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-labelledby="title"
    >
      <title id="title">Opening hours</title>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
    </svg>
  </Icon>
);

const IconEmergencyContact = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      aria-labelledby="title"
    >
      <title id="title">24/7 emergency contact</title>
      <rect fill="none" width="100" height="100" />
      <path d="M29.65,61.67c-.77.79-7.52,7.8-7.52,12.08a8.26,8.26,0,0,0,16.52,0c0-4.3-6.75-11.3-7.52-12.08A1.07,1.07,0,0,0,29.65,61.67Zm.73,18.27a6.21,6.21,0,0,1-6.2-6.2c0-2.6,4-7.43,6.2-9.85,2.23,2.42,6.2,7.26,6.2,9.85A6.21,6.21,0,0,1,30.38,79.93ZM76.83,28.32H64.45v-1a1,1,0,0,0-1-1V24.6l8.11,1.6a3.53,3.53,0,0,0,.63.06,3.93,3.93,0,0,0,3.65-4.13c0-2.52-2-4.51-4.28-4.07l-8.11,1.6V19a1,1,0,0,0-1-1H58.25a1,1,0,0,0-1,1v.63l-8.1-1.6c-2.27-.44-4.28,1.56-4.28,4.07a3.92,3.92,0,0,0,3.65,4.13,2.59,2.59,0,0,0,.63-.08l8.1-1.6v1.66a1,1,0,0,0-1,1v1H37.62A13.44,13.44,0,0,0,24.2,41.75V53.09h-1a1,1,0,0,0-1,1v4.13a1,1,0,0,0,1,1H39.68a1,1,0,0,0,1-1V54.12a1,1,0,0,0-1-1h-1V43.81a1,1,0,0,1,1-1h16.5v1a1,1,0,0,0,1,1h6.2a1,1,0,0,0,1-1v-1H76.83a1,1,0,0,0,1-1V29.35A1,1,0,0,0,76.83,28.32ZM63.42,21.77l8.5-1.68c1-.2,1.83.82,1.83,2s-.87,2.23-1.83,2l-8.5-1.68ZM38.65,57.23H24.2V55.17H38.65ZM56.19,40.72H39.68a3.1,3.1,0,0,0-3.1,3.1v9.27H26.26V41.75A11.36,11.36,0,0,1,37.62,30.4H56.19Zm1-18.21-8.49,1.67c-1,.19-1.83-.82-1.83-2a1.9,1.9,0,0,1,1.59-2.07h.24l8.49,1.67Zm2.07.84V20.07h2.07v6.19H59.29Zm3.1,6V42.77H58.25v-1s0,0,0-.06V29.36s0,0,0-.06v-1h4.13ZM75.8,40.72H64.45V30.4H75.8Z" />
    </svg>
  </Icon>
);

const IconService = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      aria-labelledby="title"
    >
      <title id="title">Open 6 days a week</title>
      <rect fill="none" width="100" height="100" />
      <path d="M49,35.77A24.81,24.81,0,0,0,25.22,60.52v1H74.77v-1A24.79,24.79,0,0,0,51,35.77V32.65h3.1V30.58H45.87v2.07H49ZM72.69,59.5H27.31a22.71,22.71,0,0,1,45.38,0ZM33.82,53.69a17.47,17.47,0,0,1,3.77-5.58,17.67,17.67,0,0,1,5.58-3.77l-.81-1.9a19.54,19.54,0,0,0-6.24,4.21,19.75,19.75,0,0,0-4.21,6.24Zm-1.25-19-4.12-4.64-1.54,1.37L31,36.08Zm45.29,35.1v-6.2H22.13v6.2H18v2.07H82V69.81Zm-2.05,0H24.2V65.68H75.81ZM36.18,28.24l-2.06-.12-.37,6.19,2.06.12Zm-5.7,9-6.19-.37-.11,2.05,6.17.37Z" />
    </svg>
  </Icon>
);

const IconLockin = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      aria-labelledby="title"
    >
      <title id="title">No lock-in contracts</title>
      <rect fill="none" width="100" height="100" />
      <path d="M48.95,37.51h2.12V35.4H48.95Zm-4.24,0h2.12V35.4H44.71Zm9.52,24.33H52.12V58.68a5.29,5.29,0,0,1,10.58,0v4.24h2.12V58.68a7.41,7.41,0,0,0-14.81,0v3.17H35.19V77.71h19ZM52.12,75.59H37.31V64H52.12Zm-6.35-7.41H43.65v4.24h2.12ZM74.33,80.88V48.09h7.91L50,17,37.31,29.24V20.59H28.85V37.4L17.75,48.09h7.91V80.88H17.21V83H82.79V80.88ZM31,22.7h4.24v8.57L31,35.36ZM23,46l27-26L77,46ZM72.22,80.88H27.78V48.09H72.22Zm-19-45.49v2.12h2.12V35.4Z" />
    </svg>
  </Icon>
);

const IconExperience = props => (
  <Icon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      aria-labelledby="title"
    >
      <title id="title">Half a century of experience</title>
      <rect fill="none" width="100" height="100" />
      <path d="M67.76,53.19l-4.17,9L51,37.17v-5H70.52l-3.67-7.34,3.67-7.33H48.91V37.19L36.1,65.49,29.9,54.79,18,82.5H82ZM51,19.6H67.13l-2.62,5.25,2.62,5.25H51ZM50,39.85l4.3,8.56-1.5.42L50,46.53,47.29,48.8l-1.15-.4ZM21.15,80.39l9-20.95L35,67.84,29.36,80.39ZM45.28,50.33l2.44.87,2.33-1.92,2.29,1.89,2.93-.84,7.19,14.32L56.35,77.88l1.91.87,9.56-20.66L78.69,80.41h-47ZM24.79,40.57H35.29a5.25,5.25,0,0,0,5.25-5.25,5.16,5.16,0,0,0-2.2-4.25A5.24,5.24,0,0,0,29.94,26a6.14,6.14,0,0,0-.95-.08,6.26,6.26,0,0,0-6,4.53,5.24,5.24,0,0,0,1.83,10.15Zm-.72-8.3.67-.15.13-.68A4.19,4.19,0,0,1,29,28a3.75,3.75,0,0,1,1,.14l.58.14.42-.41a3.13,3.13,0,0,1,5.14,3.34l-.35.9.87.42a3.13,3.13,0,0,1-1.36,6H24.79a3.14,3.14,0,0,1-.72-6.21Z" />
    </svg>
  </Icon>
);

export {
  IconLogo,
  IconSun,
  IconDownload,
  IconContact,
  IconPhone,
  IconEmail,
  IconAddress,
  IconOpen,
  IconEmergency,
  IconEmergencyContact,
  IconService,
  IconLockin,
  IconExperience,
};
