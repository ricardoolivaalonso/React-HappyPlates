import styled, {css} from "styled-components";

const MainLinkElement = styled.a`
    white-space: nowrap;
    font-size: var(--font-menu);
    line-height: 1.56;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--black);

    border-bottom: ${ ({active}) => active && '2px solid var(--black)'};
    &:hover{ border-bottom: 2px solid var(--black); }

    ${({footer}) => footer && css`
        font-family: 'BananaSemibold';
        display: block;
        padding: calc(var(--font-root)*1.5) 0;
    `}
`

export { MainLinkElement }