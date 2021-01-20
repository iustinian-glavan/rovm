import { createGlobalStyle } from "styled-components";

import Open24WOFF from "./Open24.woff";
import Open24TTF from "./Open24.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Open24';
        src: local('Open24'), local('Open24'),
        url(${Open24WOFF}) format('woff'),
        url(${Open24TTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
