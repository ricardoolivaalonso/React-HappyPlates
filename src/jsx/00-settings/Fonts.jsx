import { createGlobalStyle } from "styled-components";
import BananaLight from '../../fonts/BananaGrotesk-Light.woff2'
import BananaRegular from '../../fonts/BananaGrotesk-Regular.woff2'
import BananaSemibold from '../../fonts/BananaGrotesk-Semibold.woff2'

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'BananaLight';
        src: url(${BananaLight}) format('woff2');
        font-weight: 300;
    }
    @font-face {
        font-family: 'BananaRegular';
        src: url(${BananaRegular}) format('woff2');
        font-weight: 400;
    }
    @font-face {
        font-family: 'BananaSemibold';
        src: url(${BananaSemibold}) format('woff2');
        font-weight: 500;
    }
`

export { Fonts }