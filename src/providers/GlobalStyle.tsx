import KanitLight from '../assets/fonts/Kanit-Light.ttf';
import KanitMedium from '../assets/fonts/Kanit-Medium.ttf';
import KanitRegular from '../assets/fonts/Kanit-Regular.ttf';
import { colors } from '../constants/colors';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Kanit-Light';
      src: local('Kanit-Light'),
          url(${KanitLight}) format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Kanit-Regular';
      src: local('Kanit-Regular'),
          url(${KanitRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Kanit-Medium';
      src: local('Kanit-Medium'),
          url(${KanitMedium}) format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Kanit-Medium';
      src: local('Kanit-Medium'),
          url(${KanitMedium}) format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Kanit-Medium';
      src: local('Kanit-Medium'),
          url(${KanitMedium}) format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    width: 100%;
    background: linear-gradient(180deg, ${colors.black['900']}, ${colors.black['600']} 100%);
    font-family: "Kanit-Light";
    font-size: 16px;
    color: ${colors.gray['300']};
  }
`;
