/**
 *  Configuration file holding the default & dark/light theme values
 *  ================================================================
 *
 */
import styled, { createGlobalStyle } from 'styled-components';

import { defaultTheme } from '../themes/ThemeDefault';
import { themeLight } from '../themes/ThemeLight';
import { themeDark } from '../themes/ThemeDark';

export const lightTheme = themeLight;

export const darkTheme = themeDark;

// Creates a CSS reset and applies some basic styles to the document
export const GlobalStyle = createGlobalStyle`
  * {
    background-color: ${({ theme }) => theme.background};
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    margin: 0;
    max-height: ${defaultTheme.height.screen};
    max-width: ${defaultTheme.width.screen};
    padding: 0;
    text-decoration: none;
  },
  `;

// The main component that will wrap our application
export const Main = styled.main`
  display: flex;
  height: 94vh;
  margin: auto;
`;
