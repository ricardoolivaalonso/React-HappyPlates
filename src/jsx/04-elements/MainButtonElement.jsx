import styled from "styled-components";

const MainButtonElement = styled.button`
    position: absolute;
    left: 50%;
    width: auto;
    bottom: calc(var(--font-root)*2);
    transform: translateX(-50%);
    padding: var(--font-root) calc(var(--font-root) * 1.5);
    z-index: 10;

    font-size: var(--font-root);
    text-transform: capitalize;
    line-height: calc(var(--font-root)*1.5);
    white-space: nowrap;

    border-radius: 9999px;
    background-color: var(--white);
    color: var(--black);
    cursor: pointer;
`

export { MainButtonElement }