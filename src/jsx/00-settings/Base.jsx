import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
    html{
        font-size: var(--font-size);
        font-weight: 400;
        font-stretch: 100%;
        -webkit-font-smoothing: antialiased;
        color: var(--black);
    }
    body{
        width: 100%;
        font-family: 'BananaRegular', sans-serif;
    }
    #root{
        width: 100%;
        max-width: var(--max-width);
        margin: 0 auto;
        padding: var(--gap);
    }
    input,
    button{
        font-family: 'BananaRegular', sans-serif;
        border: none;
        outline: none;
    }
`

export { Base }