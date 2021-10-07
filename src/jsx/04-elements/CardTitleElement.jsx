import styled from "styled-components"

const CardTitleElement = styled.h2`
    font-size: calc(var(--font-root)*2);
    font-weight: 300;

    @media ${({theme}) => theme.queries.mobile} { 
        font-size: calc(var(--font-root)*1.25);
    }
`
export { CardTitleElement }