import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import theme from '../theme.js';


injectGlobal`

${normalize()}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}


blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre {
  margin: 0;
}

button {
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

iframe {
  border: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

[tabindex="-1"]:focus {
  outline: none !important;
}

img {
  font-style: italic;
  max-width: 100%;
  vertical-align: middle;
}


@font-face {
  font-family: 'GT-Eesti-Pro-Display-Thin';
  src: url('/static/fonts/GT-Eesti-Pro-Display-Thin.woff');
  src: local('GT-Eesti-Pro-Display-Thin'),
       url('/static/fonts/GT-Eesti-Pro-Display-Thin.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Display-Light';
  src: url('/static/fonts/GT-Eesti-Pro-Display-Light.woff');
  src: local('GT-Eesti-Pro-Display-Light'),
       url('/static/fonts/GT-Eesti-Pro-Display-Light.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Display-Regular';
  src: url('/static/fonts/GT-Eesti-Pro-Display-Regular.woff');
  src: local('GT-Eesti-Pro-Display-Regular'),
       url('/static/fonts/GT-Eesti-Pro-Display-Regular.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Display-Medium';
  src: url('/static/fonts/GT-Eesti-Pro-Display-Medium.woff');
  src: local('GT-Eesti-Pro-Display-Medium'),
       url('/static/fonts/GT-Eesti-Pro-Display-Medium.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Light';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Light.woff');
  src: local('GT-Eesti-Pro-Text-Light'), local('GT-Eesti-Pro-Text-Light'),
       url('/static/fonts/GT-Eesti-Pro-Text-Light.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Book';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Book.woff');
  src: local('GT-Eesti-Pro-Text-Book'), local('GT-Eesti-Pro-Text-Book'),
       url('/static/fonts/GT-Eesti-Pro-Text-Book.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Regular';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Regular.woff');
  src: local('GT-Eesti-Pro-Text-Regular'), local('GT-Eesti-Pro-Text-Regular'),
       url('/static/fonts/GT-Eesti-Pro-Text-Regular.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Medium';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff');
  src: local('GT-Eesti-Pro-Text-Medium'), local('GT-Eesti-Pro-Text-Medium'),
       url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Bold';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Bold.woff');
  src: local('GT-Eesti-Pro-Text-Bold'), local('GT-Eesti-Pro-Text-Bold'),
       url('/static/fonts/GT-Eesti-Pro-Text-Bold.woff') format('woff');
}

body {
  font-family: 'GT-Eesti-Pro-Text-Light';
  font-size: 16px;
  font-weight: normal;
  letter-spacing: ${theme.letterSpacing.body};
  line-height: ${theme.lineHeight.text};
  color: ${theme.colors.text};
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  font-weight: inherit;
  margin: 0;
}

p a {
  background-image: linear-gradient(to bottom, rgba(74, 74, 85, 0) 50%, rgba(74, 74, 85, 0.5) 50%);
  background-repeat: repeat-x;
  background-size: 1px 2px;
  background-position: 0 100%;
  color: currentColor;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  letter-spacing: inherit;
}

`;