import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
    :root {
        --black: #111111;
        --white: #F9F9F9;
        --gray: #929292;
        --shadow: #000000;

        --max-width: 1312px;
        --mobile: 750;
        --gap: 16px;

        --font-root: 16px;
        --font-menu: calc( var(--font-root) * 1.125 );
    }
`

export { Variables }